import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoaDonRoutingModule } from './hoa-don-routing.module';
import { HoaDonComponent } from './hoa-don.component';
import { HoaDonListComponent } from './hoa-don-list/hoa-don-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HoaDonDetailComponent } from './hoa-don-detail/hoa-don-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HoaDonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [HoaDonComponent, HoaDonListComponent, HoaDonDetailComponent]
})
export class HoaDonModule { }
