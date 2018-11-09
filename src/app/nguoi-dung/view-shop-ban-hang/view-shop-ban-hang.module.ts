import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewShopBanHangRoutingModule } from './view-shop-ban-hang-routing.module';
import { ViewShopBanHangComponent } from './view-shop-ban-hang.component';
import { ViewShopBanHangHomeComponent } from './view-shop-ban-hang-home/view-shop-ban-hang-home.component';
import { XemLoaiSanPhamShopComponent } from './xem-loai-san-pham-shop/xem-loai-san-pham-shop.component';
import { ViewSanPhamDetailComponent } from './view-san-pham-detail/view-san-pham-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ViewShopBanHangRoutingModule
  ],
  declarations: [ViewShopBanHangComponent, ViewShopBanHangHomeComponent, XemLoaiSanPhamShopComponent, ViewSanPhamDetailComponent]
})
export class ViewShopBanHangModule { }
