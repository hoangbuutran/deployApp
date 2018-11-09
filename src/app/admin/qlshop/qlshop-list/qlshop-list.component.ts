import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/Service/Shop.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qlshop-list',
  templateUrl: './qlshop-list.component.html',
  styleUrls: ['./qlshop-list.component.css']
})
export class QlshopListComponent implements OnInit {

  TenShopDetail: string;
  DiaChiDetail: string;
  SDTDetail: string;
  EmailDetail: string;
  TrangThaiDetail: boolean;
  DoTinCayDetail: number;


  UserNameDetail;
  PassDetail;

  constructor(
    private shopService: ShopService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.shopService.viewListShop();
  }

  khoaMo(IdShop) {
    if (confirm('Bạn có chắc chắn muốn khóa cơ sở thú y ?') === true) {
      this.shopService.KhoaMo(IdShop)
        .subscribe(res => {
          this.shopService.viewListShop();
          this.toastr.warning(res.message, 'Thông báo');
        });
    }
  }

  xemTaiKhoanShop(IdTaiKhoan) {
    this.shopService.xemTaiKhoanShop(IdTaiKhoan).subscribe(x => {
      this.UserNameDetail = x.data.UserName;
      this.PassDetail = x.data.Pass;
    });
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
      });
  }
}
