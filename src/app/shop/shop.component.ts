import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/Service/session.service';
import { Router } from '@angular/router';
import { ShopService } from '../shared/Service/Shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  sessionuser: any;
  tenShop: any;
  idShop: any;
  constructor(
    private route: Router,
    private shopService: ShopService,
    private sessionService: SessionService,
  ) { }
  ngOnInit() {
    this.ShopIdTaiKhoan();
  }

  ShopIdTaiKhoan() {
    this.sessionuser = this.sessionService.getToken();
    this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.tenShop = res.data.TenShop;
      this.idShop = res.data.IdShop;
    });
  }

  LogOut() {
    sessionStorage.removeItem('session');
    this.route.navigate(['/login']);
  }
}
