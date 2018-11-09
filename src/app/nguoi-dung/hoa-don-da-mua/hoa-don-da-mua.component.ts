import { Component, OnInit } from '@angular/core';
import { HoaDonService } from '../../shared/Service/HoaDon.service';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';
import { SessionService } from '../../shared/Service/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hoa-don-da-mua',
  templateUrl: './hoa-don-da-mua.component.html',
  styleUrls: ['./hoa-don-da-mua.component.css']
})
export class HoaDonDaMuaComponent implements OnInit {

  listCTHD: any;
  trangThai: any;
  tongGiaTriHoaDon: any;
  idNguoiDung: any;
  sessionuser: any;
  listHoaDonNguoiDung: any[];

  constructor(
    private hoaDonService: HoaDonService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idNguoiDung = res.data.IdNguoiDung;
      this.hoaDonService.viewHoaDonVoiIdNguoiDung(res.data.IdNguoiDung).subscribe(res => {
        this.listHoaDonNguoiDung = res.data;
      });
    });
  }

  huyDonHang(IdHoaDon) {
    this.hoaDonService.huyDonHangForNguoiDung(IdHoaDon).subscribe(res => {
      this.ngOnInit();
      this.toastr.success('Đơn hàng đã được hủy bỏ', 'Thông báo');
    });
  }

  listHoaDonDetail(IdHoaDon) {
    this.hoaDonService.viewCTHoaDonVoiIdHoaDon(IdHoaDon).subscribe(
      res => {
        this.listCTHD = res.data;
      }
    );
    this.hoaDonService.view(IdHoaDon).subscribe(
      res => {
        this.trangThai = res.data.TrangThai;
        this.tongGiaTriHoaDon = res.data.TongGia;
      }
    );
  }
}
