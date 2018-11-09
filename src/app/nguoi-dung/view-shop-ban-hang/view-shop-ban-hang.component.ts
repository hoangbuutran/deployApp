import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoaiSanPhamService } from '../../shared/Service/LoaiSanPham.service';
import { LoaiSanPhamModel } from '../../shared/Model/LoaiSanPham.model';
import { ShopService } from '../../shared/Service/Shop.service';

@Component({
  selector: 'app-view-shop-ban-hang',
  templateUrl: './view-shop-ban-hang.component.html',
  styleUrls: ['./view-shop-ban-hang.component.css']
})
export class ViewShopBanHangComponent implements OnInit {

  idShop = '';
  loaiSanPhamListForTrueProperty: LoaiSanPhamModel[];
  TenShopDetail: any;
  DiaChiDetail: any;
  SDTDetail: any;
  EmailDetail: any;
  DoTinCayDetail: any;
  constructor(
    private route: ActivatedRoute,
    private loaiSanPhamService: LoaiSanPhamService,
    private shopService: ShopService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idShop = params.get('IdShop');
    });

    this.loaiSanPhamService.viewForTrue(this.idShop).subscribe(res => {
      this.loaiSanPhamListForTrueProperty = res.data;
    });

    this.shopService.view(this.idShop).subscribe(res => {
      this.TenShopDetail = res.data.TenShop;
      this.DiaChiDetail = res.data.DiaChi;
      this.SDTDetail = res.data.SDT;
      this.EmailDetail = res.data.Email;
      this.DoTinCayDetail = res.data.DoTinCay;
    });

  }

}
