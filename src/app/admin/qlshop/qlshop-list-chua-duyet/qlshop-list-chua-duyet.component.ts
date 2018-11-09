import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/Service/Shop.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlshop-list-chua-duyet',
  templateUrl: './qlshop-list-chua-duyet.component.html',
  styleUrls: ['./qlshop-list-chua-duyet.component.css']
})
export class QlshopListChuaDuyetComponent implements OnInit {

  TenShopDetail: string;
  DiaChiDetail: string;
  SDTDetail: string;
  EmailDetail: string;
  TrangThaiDetail: boolean;
  DoTinCayDetail: number;
  DongYChinhSachDetail: boolean;
  IdShopDetail: number;

  UserNameDetail;
  PassDetail;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.shopService.viewListShopChuaDuyet(); //shopListChuaDuyetProperty
  }

  xemThongTinShop(IdShop) {
    this.shopService.view(IdShop)
      .subscribe(res => {
        this.TenShopDetail = res.data.TenShop;
        this.DiaChiDetail = res.data.DiaChi;
        this.SDTDetail = res.data.SDT;
        this.EmailDetail = res.data.Email;
        this.TrangThaiDetail = res.data.TrangThai;
        this.DoTinCayDetail = res.data.DoTinCay;
        this.DongYChinhSachDetail = res.data.DongYChinhSach;
        this.IdShopDetail = res.data.IdShop;
      });
  }

  Duyet() {
    if (confirm('Bạn có chắc chắn muốn duyệt shop ?') === true) {
      this.shopService.Duyet(this.IdShopDetail)
        .subscribe(res => {
          this.shopService.viewListShopChuaDuyet();
          this.toastr.warning(res.message, 'Thông báo');
        });
    }
  }

  TuChoi() {
    if (confirm('Bạn có chắc chắn muốn từ chối shop ?') === true) {
      this.shopService.TuChoi(this.IdShopDetail)
        .subscribe(res => {
          this.shopService.viewListShopChuaDuyet();
          this.toastr.warning(res.message, 'Thông báo');
        });
    }
  }
  
}
