import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChiTietHoaDonModel } from '../../../shared/Model/ChiTietHoaDon.model';
import { HoaDonService } from '../../../shared/Service/HoaDon.service';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { ToastrService } from 'ngx-toastr';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { NguoiDungModel } from '../../../shared/Model/NguoiDung.model';

@Component({
  selector: 'app-hoa-don-detail',
  templateUrl: './hoa-don-detail.component.html',
  styleUrls: ['./hoa-don-detail.component.css']
})
export class HoaDonDetailComponent implements OnInit {
  id: any;
  listCTHD: any;
  listSanPham: any[] = [];
  trangThai: any;
  tongGiaTriHoaDon: any;
  idNguoiDung: any;
  tenNguoiDungDetail: any;
  diaChiDetail: any;
  emailDetail: any;
  sDTDetail: any;
  ngaySinhDetail: any;
  tinhtrangdonhang: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private hoaDonService: HoaDonService,
    private sanPhamService: SanPhamService,
    private nguoiDungService: NguoiDungService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdHoaDon');
    });
    this.tinhtrangdonhang = true;
    this.hoaDonService.viewCTHoaDonVoiIdHoaDon(this.id).subscribe(
      res => {
        this.listCTHD = res.data;
      }
    );
    this.load();

  }

  load() {
    this.hoaDonService.view(this.id).subscribe(
      res => {
        this.trangThai = res.data.TrangThai;
        this.tongGiaTriHoaDon = res.data.TongGia;
        this.idNguoiDung = res.data.IdNguoiDung;
        this.nguoiDungService.view(this.idNguoiDung).subscribe(res => {
          this.tenNguoiDungDetail = res.data.TenNguoiDung;
          this.diaChiDetail = res.data.DiaChi;
          this.emailDetail = res.data.Email;
          this.sDTDetail = res.data.SDT;
          this.ngaySinhDetail = res.data.NgaySinh;
        });
      }
    );
  }

  duyetDonHang() {
    this.hoaDonService.updateTrangThai(this.id).subscribe(res => {
      this.toastr.success('Hóa đơn đã được duyệt', 'Thông báo');
      this.load();
      this.tinhtrangdonhang = false;
    });
  }

  huyDonHang() {
    this.hoaDonService.huyDonHangForShop(this.id).subscribe(res => {
      this.toastr.success('Hóa đơn đã được hủy thành công', 'Thông báo');
      this.router.navigate(['/shop/hoadon/list']);
    });
  }
}
