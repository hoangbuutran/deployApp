import { Component, OnInit } from '@angular/core';
import { SucKhoeThuCungService } from '../../../shared/Service/SucKhoeThuCung.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qlsuc-khoe-thu-cung-list',
  templateUrl: './qlsuc-khoe-thu-cung-list.component.html',
  styleUrls: ['./qlsuc-khoe-thu-cung-list.component.css']
})
export class QlsucKhoeThuCungListComponent implements OnInit {

  arrayDelete = [];
  constructor(
    private sucKhoeThuCungService: SucKhoeThuCungService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.sucKhoeThuCungService.delete(element).subscribe(x => {
        this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
      });
    });
    this.toastr.warning('Xóa nhiều suc Khoe Thu Cung thành công', 'Thông báo');
  }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa suc Khoe Thu Cung ?') === true) {
      this.sucKhoeThuCungService.KhoaMo(id)
        .subscribe(x => {
          this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoasucKhoeThuCung(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa suc Khoe Thu Cung ?') === true) {
      this.sucKhoeThuCungService.delete(id)
        .subscribe(x => {
          this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

}
