import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeShopComponent } from './home-shop/home-shop.component';
import { ChangePassShopComponent } from './change-pass-shop/change-pass-shop.component';
import { ChangeProfileShopComponent } from './change-profile-shop/change-profile-shop.component';
import { ThongKeDoanhSoShopComponent } from './thong-ke-doanh-so-shop/thong-ke-doanh-so-shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeShopComponent },
      { path: 'loaisanpham', loadChildren: './loai-san-pham/loai-san-pham.module#LoaiSanPhamModule' },
      { path: 'sanpham', loadChildren: './san-pham/san-pham.module#SanPhamModule' },
      { path: 'hoadon', loadChildren: './hoa-don/hoa-don.module#HoaDonModule' },
      { path: 'changepass', component: ChangePassShopComponent },
      { path: 'thongkebaocao', loadChildren: './thong-ke-doanh-so-shop/thong-ke-doanh-so-shop.module#ThongKeDoanhSoShopModule' },
      { path: 'changeprofile/:IdShop', component: ChangeProfileShopComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
