import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuyenMucRoutingModule } from './chuyen-muc-routing.module';
import { ChuyenMucComponent } from './chuyen-muc.component';
import { ChuyenMucListComponent } from './chuyen-muc-list/chuyen-muc-list.component';
import { ChuyenMucAddComponent } from './chuyen-muc-add/chuyen-muc-add.component';
import { ChuyenMucEditComponent } from './chuyen-muc-edit/chuyen-muc-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChuyenMucRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [ChuyenMucComponent, ChuyenMucListComponent, ChuyenMucAddComponent, ChuyenMucEditComponent]
})
export class ChuyenMucModule { }
