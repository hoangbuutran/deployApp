import { Component, OnInit } from '@angular/core';
import { DichVuService } from '../../../shared/Service/DichVu.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qldich-vu-list',
  templateUrl: './qldich-vu-list.component.html',
  styleUrls: ['./qldich-vu-list.component.css']
})
export class QldichVuListComponent implements OnInit {

  arrayDelete = [];
  constructor(
    private dichVuService: DichVuService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.dichVuService.dichVuListVoiCSYT();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.dichVuService.delete(element).subscribe(x => {
        this.dichVuService.dichVuListVoiCSYT();
      });
    });
    this.toastr.warning('Xóa nhiều dịch vụ thành công', 'Thông báo');
  }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa dịch vụ ?') === true) {
      this.dichVuService.KhoaMo(id)
        .subscribe(x => {
          this.dichVuService.dichVuListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoaDichVu(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa dịch vụ ?') === true) {
      this.dichVuService.delete(id)
        .subscribe(x => {
          this.dichVuService.dichVuListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }
}
