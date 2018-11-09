import { Component, OnInit } from '@angular/core';
import { HoatDongService } from '../../../shared/Service/HoatDong.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qlhoat-dong-list',
  templateUrl: './qlhoat-dong-list.component.html',
  styleUrls: ['./qlhoat-dong-list.component.css']
})
export class QlhoatDongListComponent implements OnInit {

  arrayDelete = [];
  constructor(
    private hoatDongService: HoatDongService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.hoatDongService.hoatDongListVoiCSYT();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.hoatDongService.delete(element).subscribe(x => {
        this.hoatDongService.hoatDongListVoiCSYT();
      });
    });
    this.toastr.warning('Xóa nhiều hoạt động thành công', 'Thông báo');
  }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa hoạt động ?') === true) {
      this.hoatDongService.KhoaMo(id)
        .subscribe(x => {
          this.hoatDongService.hoatDongListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoahoatDong(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa hoạt động ?') === true) {
      this.hoatDongService.delete(id)
        .subscribe(x => {
          this.hoatDongService.hoatDongListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

}
