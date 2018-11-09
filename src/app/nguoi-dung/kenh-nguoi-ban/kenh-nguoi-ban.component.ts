import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shared/Service/Shop.service';

@Component({
  selector: 'app-kenh-nguoi-ban',
  templateUrl: './kenh-nguoi-ban.component.html',
  styleUrls: ['./kenh-nguoi-ban.component.css']
})
export class KenhNguoiBanComponent implements OnInit {
  constructor(
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.shopService.viewListShopForTrue();
  }

}
