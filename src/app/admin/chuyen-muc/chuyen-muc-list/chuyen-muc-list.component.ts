import { Component, OnInit } from '@angular/core';
import { ChuyenMucModel } from '../../../shared/Model/ChuyenMuc.model';
import { ChuyenMucService } from '../../../shared/Service/ChuyenMuc.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chuyen-muc-list',
  templateUrl: './chuyen-muc-list.component.html',
  styleUrls: ['./chuyen-muc-list.component.css']
})
export class ChuyenMucListComponent implements OnInit {

  chuyenMucList: ChuyenMucModel[] = null;
  arrayDelete = [];
  constructor(
    private chuyenMucService: ChuyenMucService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.chuyenMucService.chuyenMucList();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.chuyenMucService.delete(element).subscribe(x => {
        this.chuyenMucService.chuyenMucList();
      });
    });
    this.toastr.warning('Xóa nhiều quyền thành công', 'Thông báo');
  }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa quyền ?') === true) {
      this.chuyenMucService.KhoaMo(id)
        .subscribe(x => {
          this.chuyenMucService.chuyenMucList();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoaChuyenMuc(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa quyền ?') === true) {
      this.chuyenMucService.delete(id)
        .subscribe(x => {
          this.chuyenMucService.chuyenMucList();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

}
