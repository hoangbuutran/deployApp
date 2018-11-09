import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HomeShopComponent } from './home-shop/home-shop.component';
import { ChangePassShopComponent } from './change-pass-shop/change-pass-shop.component';
import { ChangeProfileShopComponent } from './change-profile-shop/change-profile-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThongKeDoanhSoShopComponent } from './thong-ke-doanh-so-shop/thong-ke-doanh-so-shop.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [ShopComponent, HomeShopComponent, ChangePassShopComponent, ChangeProfileShopComponent]
})
export class ShopModule { }
