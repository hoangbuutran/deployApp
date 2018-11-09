import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhachHangRoutingModule } from './khach-hang-routing.module';
import { KhachHangComponent } from './khach-hang.component';
import { KhachHangListComponent } from './khach-hang-list/khach-hang-list.component';
import { KhachHangDetailComponent } from './khach-hang-detail/khach-hang-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThuCungDetailWithKhachHangComponent } from './thu-cung-detail-with-khach-hang/thu-cung-detail-with-khach-hang.component';

@NgModule({
  imports: [
    CommonModule,
    KhachHangRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [KhachHangComponent, KhachHangListComponent, KhachHangDetailComponent, ThuCungDetailWithKhachHangComponent]
})
export class KhachHangModule { }
