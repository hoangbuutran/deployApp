import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewShopBanHangComponent } from './view-shop-ban-hang.component';
import { ViewShopBanHangHomeComponent } from './view-shop-ban-hang-home/view-shop-ban-hang-home.component';
import { XemLoaiSanPhamShopComponent } from './xem-loai-san-pham-shop/xem-loai-san-pham-shop.component';
import { ViewSanPhamDetailComponent } from './view-san-pham-detail/view-san-pham-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewShopBanHangComponent,
    children: [
      { path: '', redirectTo: 'home/:IdShop', pathMatch: 'full' },
      { path: 'home/:IdShop', component: ViewShopBanHangHomeComponent },
      { path: 'loaisanpham/:IdLoaiSanPham', component: XemLoaiSanPhamShopComponent },
      { path: 'viewsanphamdetail/:IdSanPham', component: ViewSanPhamDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShopBanHangRoutingModule { }
