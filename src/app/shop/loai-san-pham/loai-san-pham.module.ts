import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaiSanPhamRoutingModule } from './loai-san-pham-routing.module';
import { LoaiSanPhamComponent } from './loai-san-pham.component';
import { LoaiSanPhamListComponent } from './loai-san-pham-list/loai-san-pham-list.component';
import { LoaiSanPhamAddComponent } from './loai-san-pham-add/loai-san-pham-add.component';
import { LoaiSanPhamEditComponent } from './loai-san-pham-edit/loai-san-pham-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoaiSanPhamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [LoaiSanPhamComponent, LoaiSanPhamListComponent, LoaiSanPhamAddComponent, LoaiSanPhamEditComponent]
})
export class LoaiSanPhamModule { }
