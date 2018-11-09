import { Component, OnInit , ViewContainerRef } from '@angular/core';
import { GiongThuCungModel } from '../../../shared/Model/GiongThuCung.model';
import { GiongThuCungService } from '../../../shared/Service/GiongThuCung.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-giong-thu-cung-list',
  templateUrl: './giong-thu-cung-list.component.html',
  styleUrls: ['./giong-thu-cung-list.component.css']
})
export class GiongThuCungListComponent implements OnInit {
  arrayDelete = [];
  TenGiongThuCungDetail: string;
  GioiThieuDetail: any;
  HinhAnhDetail: string;
  DacDiemDetail: string;
  TinhCachDetail: string;
  CachChamSocDetail: string;
  LuuYSucKhoeDetail: string;
  LichSuDetail: string;
  TrangThaiDetail: boolean;

  imageUrl;
  constructor(
    private giongThuCungService: GiongThuCungService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.giongThuCungService.giongThuCungList();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  XoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.giongThuCungService.delete(element).subscribe(x => {
        this.giongThuCungService.giongThuCungList();
      });
    });
    this.toastr.warning('Xóa nhiều giống thú cưng thành công', 'Thông báo');
  }

  XemThongTinGiongThuCung(id: number) {
    this.giongThuCungService.XemThongTinGiongThuCung(id).subscribe(x => {
      this.TenGiongThuCungDetail = x.data.TenGiongThuCung;
      this.GioiThieuDetail = x.data.GioiThieu;
      this.HinhAnhDetail = 'http://petslike.somee.com/Images/' + x.data.HinhAnh;
      this.imageUrl = 'http://petslike.somee.com/Images/' + x.data.HinhAnh;
      this.DacDiemDetail = x.data.DacDiem;
      this.TinhCachDetail = x.data.TinhCach;
      this.CachChamSocDetail = x.data.CachChamSoc;
      this.LuuYSucKhoeDetail = x.data.LuuYSucKhoe;
      this.LichSuDetail = x.data.LichSu;
      this.TrangThaiDetail = x.data.TrangThai;
    });
  }

  KhoaMo(id: number) {
    if (confirm('Bạn có chắc chắn muốn khóa giống thú cưng ?') === true) {
      this.giongThuCungService.KhoaMo(id)
        .subscribe(x => {
          this.giongThuCungService.giongThuCungList();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  XoaGiongThuCung(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa giống thú cưng ?') === true) {
      this.giongThuCungService.delete(id)
        .subscribe(x => {
          this.giongThuCungService.giongThuCungList();
          this.toastr.warning('Xóa giống thú cưng thành công', 'Thông báo');
        });
    }
  }

}
