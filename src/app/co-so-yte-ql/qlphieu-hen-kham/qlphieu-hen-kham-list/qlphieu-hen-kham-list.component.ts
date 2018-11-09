import { Component, OnInit } from '@angular/core';
import { PhieuHenKhamService } from '../../../shared/Service/PhieuHenKham.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qlphieu-hen-kham-list',
  templateUrl: './qlphieu-hen-kham-list.component.html',
  styleUrls: ['./qlphieu-hen-kham-list.component.css']
})
export class QlphieuHenKhamListComponent implements OnInit {

  arrayDelete = [];

  constructor(
    private phieuHenKhamService: PhieuHenKhamService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.phieuHenKhamService.phieuHenKhamListVoiCSYT();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.phieuHenKhamService.delete(element).subscribe(x => {
        this.phieuHenKhamService.phieuHenKhamListVoiCSYT();
      });
    });
    this.toastr.warning('Xóa nhiều phiếu hẹn khám thành công', 'Thông báo');
  }

  xoaphieuHenKham(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa phiếu hẹn khám ?') === true) {
      this.phieuHenKhamService.delete(id)
        .subscribe(x => {
          this.phieuHenKhamService.phieuHenKhamListVoiCSYT();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }
}
