import { Component, OnInit } from '@angular/core';
import { QuyenModel } from '../../../shared/Model/Quyen.model';
import { QuyenService } from '../../../shared/Service/Quyen.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-quyen-list',
  templateUrl: './quyen-list.component.html',
  styleUrls: ['./quyen-list.component.css'],
})

export class QuyenListComponent implements OnInit {
  quyenList: QuyenModel[] = null;
  arrayDelete = [];
  constructor(
    private quyenService: QuyenService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.quyenService.QuyenList();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  XoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.quyenService.delete(element).subscribe(x => {
        this.quyenService.QuyenList();
      });
    });
    this.toastr.warning('Xóa nhiều quyền thành công', 'Thông báo');
  }

  KhoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa quyền ?') === true) {
      this.quyenService.KhoaMo(id)
        .subscribe(x => {
          this.quyenService.QuyenList();
          this.toastr.warning('Khóa quyền thành công', 'Thông báo');
        });
    }
  }

  XoaQuyen(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa quyền ?') === true) {
      this.quyenService.delete(id)
        .subscribe(x => {
          this.quyenService.QuyenList();
          this.toastr.warning('Xóa quyền thành công', 'Thông báo');
        });
    }
  }
}
