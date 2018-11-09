import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QldichVuRoutingModule } from './qldich-vu-routing.module';
import { QldichVuComponent } from './qldich-vu.component';
import { QldichVuListComponent } from './qldich-vu-list/qldich-vu-list.component';
import { QldichVuAddComponent } from './qldich-vu-add/qldich-vu-add.component';
import { QldichVuEditComponent } from './qldich-vu-edit/qldich-vu-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    QldichVuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditorModule
  ],
  declarations: [
    QldichVuComponent,
    QldichVuListComponent,
    QldichVuAddComponent,
    QldichVuEditComponent,
  ]
})
export class QldichVuModule { }
