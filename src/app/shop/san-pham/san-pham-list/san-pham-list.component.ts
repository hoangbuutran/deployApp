import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { ShopService } from '../../../shared/Service/Shop.service';
import { HinhAnhSanPhamModel } from '../../../shared/Model/HinhAnhSanPham.model';
import { HinhAnhSanPhamService } from '../../../shared/Service/HinhAnhSanPham.service';

@Component({
  selector: 'app-san-pham-list',
  templateUrl: './san-pham-list.component.html',
  styleUrls: ['./san-pham-list.component.css']
})
export class SanPhamListComponent implements OnInit {
  TenSanPhamDetail;
  LoaiSanPhamDetail;
  ShopDetai;
  GiaDetail;
  DacDiemDetail;
  NgayNhapDetail;
  TrangThaiDetail;
  hinhAnhDetails: HinhAnhSanPhamModel[];
  listLinkHinhAnh = new Array<string>();
  constructor(
    private sanPhamService: SanPhamService,
    private router: Router,
    private toastr: ToastrService,
    private shopService: ShopService,
    private loaiSanPhamService: LoaiSanPhamService,
    private hinhAnhSanPhamService: HinhAnhSanPhamService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.sanPhamService.sanPhamListWithIdShop();
  }

  XemThongTinSanPham(id: number) {
    this.sanPhamService.view(id).subscribe(x => {
      this.TenSanPhamDetail = x.data.TenSanPham;
      this.GiaDetail = x.data.Gia;
      this.DacDiemDetail = x.data.DacDiem;
      this.NgayNhapDetail = x.data.NgayNhap;
      this.TrangThaiDetail = x.data.TrangThai;
      this.shopService.view(x.data.IdShop).subscribe(res => this.ShopDetai = res.data.TenShop);
      this.loaiSanPhamService.view(x.data.IdLoaiSanPham).subscribe(res => this.LoaiSanPhamDetail = res.data.TenLoaiSanPham);
      this.hinhAnhSanPhamService.viewHinhAnhSanPhamVoiIdSanPham(id).subscribe(res => {
        this.hinhAnhDetails = res.data;
        this.getLink();
      });
    });
  }

  getLink(){
    this.listLinkHinhAnh = [];
    this.hinhAnhDetails.forEach(element => {
      this.listLinkHinhAnh.push('http://takecareofpets.somee.com/Images/' + element.LinkHinhAnh);
    });
  }

  khoaMo(id: number) {
    if (confirm('Bạn có chắc chắn muốn khóa sản phẩm ?') === true) {
      this.sanPhamService.KhoaMo(id)
        .subscribe(x => {
          this.sanPhamService.sanPhamListWithIdShop();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }
}
