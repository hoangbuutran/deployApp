import { Component, OnInit } from '@angular/core';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-co-so-thu-ylist',
  templateUrl: './co-so-thu-ylist.component.html',
  styleUrls: ['./co-so-thu-ylist.component.css']
})
export class CoSoThuYlistComponent implements OnInit {

  arrayDelete = [];
  UserNameDetail: string;
  PassDetail: string;
  imageUrl;

  TenCoSoThuYDetail: string;
  DiaDiemDetail: string;
  SDTDetail: string;
  EmailDetail: string;
  TrangThaiDetail: string;

  constructor(
    private coSoThuYService: CoSoThuYService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.coSoThuYService.coSoThuYList();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.coSoThuYService.delete(element).subscribe(x => {
        this.coSoThuYService.coSoThuYList();
      });
    });
    this.toastr.warning('Xóa nhiều cơ sở thú y thành công', 'Thông báo');
  }

  xemTaiKhoanCoSoThuY(id: number) {
    this.coSoThuYService.xemTaiKhoanCoSoThuY(id).subscribe(x => {
      this.UserNameDetail = x.data.UserName;
      this.PassDetail = x.data.Pass;
    });
  }

  xemThongTinCoSoThuY(id: number) {
    this.coSoThuYService.view(id).subscribe(x => {
      this.TenCoSoThuYDetail = x.data.TenCoSoThuY;
      this.DiaDiemDetail = x.data.DiaDiem;
      this.SDTDetail = x.data.SDT;
      this.EmailDetail = x.data.Email;
      this.TrangThaiDetail = x.data.TrangThai;
    });
  }
  
  khoaMo(id: number) {
    if (confirm('Bạn có chắc chắn muốn khóa cơ sở thú y ?') === true) {
      this.coSoThuYService.KhoaMo(id)
        .subscribe(x => {
          this.coSoThuYService.coSoThuYList();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoaCoSoThuY(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa cơ sở thú y ?') === true) {
      this.coSoThuYService.delete(id)
        .subscribe(x => {
          this.coSoThuYService.coSoThuYList();
          this.toastr.warning('Xóa cơ sở thú y thành công', 'Thông báo');
        });
    }
  }
}
