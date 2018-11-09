import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanPhamRoutingModule } from './san-pham-routing.module';
import { SanPhamComponent } from './san-pham.component';
import { SanPhamListComponent } from './san-pham-list/san-pham-list.component';
import { SanPhamAddComponent } from './san-pham-add/san-pham-add.component';
import { SanPhamEditComponent } from './san-pham-edit/san-pham-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EscapeHtmlPipeForSanPham } from '../../shared/Pipe/EscapeHtmlPipeForSanPham.pipe';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    SanPhamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditorModule
  ],
  declarations: [
    SanPhamComponent, 
    SanPhamListComponent, 
    SanPhamAddComponent, 
    SanPhamEditComponent,
    EscapeHtmlPipeForSanPham 
  ]
})
export class SanPhamModule { }
