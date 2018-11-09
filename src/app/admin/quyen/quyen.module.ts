import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuyenRoutingModule } from './quyen-routing.module';
import { QuyenComponent } from './quyen.component';
import { QuyenAddComponent } from './quyen-add/quyen-add.component';
import { QuyenEditComponent } from './quyen-edit/quyen-edit.component';
import { QuyenDetailComponent } from './quyen-detail/quyen-detail.component';
import { QuyenListComponent } from './quyen-list/quyen-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    QuyenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [QuyenComponent, QuyenAddComponent, QuyenEditComponent, QuyenDetailComponent, QuyenListComponent]
})
export class QuyenModule { }
