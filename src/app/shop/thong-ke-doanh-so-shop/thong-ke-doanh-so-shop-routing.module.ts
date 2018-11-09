import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThongKeDoanhSoShopComponent } from './thong-ke-doanh-so-shop.component';
import { SanPham5MaxNgayComponent } from './san-pham5-max-ngay/san-pham5-max-ngay.component';
import { SanPham10MaxThangComponent } from './san-pham10-max-thang/san-pham10-max-thang.component';
import { ThongKeHomeComponent } from './thong-ke-home/thong-ke-home.component';
import { HoaDonTheoThangComponent } from './hoa-don-theo-thang/hoa-don-theo-thang.component';
import { HoaDonTrongKhoangThangComponent } from './hoa-don-trong-khoang-thang/hoa-don-trong-khoang-thang.component';

const routes: Routes = [
  {
    path: '',
    component: ThongKeDoanhSoShopComponent,
    children: [
      { path: '', redirectTo: 'thongkehome', pathMatch: 'full' },
      { path: 'thongkehome', component: ThongKeHomeComponent },
      { path: '5sanphammaxngay', component: SanPham5MaxNgayComponent },
      { path: '10sanphammaxthang', component: SanPham10MaxThangComponent },
      { path: 'hoadontheothang', component: HoaDonTheoThangComponent },
      { path: 'hoadontheokhoangthang', component: HoaDonTrongKhoangThangComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongKeDoanhSoShopRoutingModule { }
