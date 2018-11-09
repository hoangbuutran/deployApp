import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/Service/session.service';
import { TaiKhoanModel } from '../../../shared/Model/TaiKhoan.model';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { NguoiDungModel } from '../../../shared/Model/NguoiDung.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-khach-hang-list',
  templateUrl: './khach-hang-list.component.html',
  styleUrls: ['./khach-hang-list.component.css']
})
export class KhachHangListComponent implements OnInit {

  chuyenMucList: NguoiDungModel[] = null;

  arrayDelete = [];
  constructor(
    private nguoiDungService: NguoiDungService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.nguoiDungService.nguoiDungListVoiCSYT();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.nguoiDungService.delete(element).subscribe(x => {
        this.nguoiDungService.nguoiDungListVoiCSYT();
      });
    });
    this.toastr.warning('Xóa nhiều khach hang thành công', 'Thông báo');
  }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa khach hang ?') === true) {
      this.nguoiDungService.KhoaMo(id)
        .subscribe(x => {
          this.nguoiDungService.nguoiDungListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoaNguoiDung(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa Khach hang ?') === true) {
      this.nguoiDungService.delete(id)
        .subscribe(x => {
          this.nguoiDungService.nguoiDungListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }
}
