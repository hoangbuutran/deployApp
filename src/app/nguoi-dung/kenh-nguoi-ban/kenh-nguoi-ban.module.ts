import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KenhNguoiBanRoutingModule } from './kenh-nguoi-ban-routing.module';
import { KenhNguoiBanComponent } from './kenh-nguoi-ban.component';
import { HomeKenhNguoiBanComponent } from './home-kenh-nguoi-ban/home-kenh-nguoi-ban.component';
import { DangKyBanHangComponent } from './dang-ky-ban-hang/dang-ky-ban-hang.component';
import { ViewDetailProductComponent } from './view-detail-product/view-detail-product.component';


@NgModule({
  imports: [
    CommonModule,
    KenhNguoiBanRoutingModule
  ],
  declarations: [KenhNguoiBanComponent, HomeKenhNguoiBanComponent, DangKyBanHangComponent, ViewDetailProductComponent]
})
export class KenhNguoiBanModule { }
