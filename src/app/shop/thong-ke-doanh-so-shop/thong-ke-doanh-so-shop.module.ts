import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThongKeDoanhSoShopRoutingModule } from './thong-ke-doanh-so-shop-routing.module';
import { ThongKeDoanhSoShopComponent } from './thong-ke-doanh-so-shop.component';
import { SanPham5MaxNgayComponent } from './san-pham5-max-ngay/san-pham5-max-ngay.component';
import { SanPham10MaxThangComponent } from './san-pham10-max-thang/san-pham10-max-thang.component';
import { HoaDonTheoThangComponent } from './hoa-don-theo-thang/hoa-don-theo-thang.component';
import { HoaDonTrongKhoangThangComponent } from './hoa-don-trong-khoang-thang/hoa-don-trong-khoang-thang.component';
import { ThongKeHomeComponent } from './thong-ke-home/thong-ke-home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    ThongKeDoanhSoShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditorModule
  ],
  declarations: [ThongKeDoanhSoShopComponent, SanPham5MaxNgayComponent, SanPham10MaxThangComponent, HoaDonTheoThangComponent, HoaDonTrongKhoangThangComponent, ThongKeHomeComponent]
})
export class ThongKeDoanhSoShopModule { }
