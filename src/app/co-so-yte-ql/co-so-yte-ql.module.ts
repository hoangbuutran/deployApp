import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoYteQlRoutingModule } from './co-so-yte-ql-routing.module';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';
import { ChangePassCstyComponent } from './change-pass-csty/change-pass-csty.component';
import { ChangeProfileCstyComponent } from './change-profile-csty/change-profile-csty.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QlgioiThieuComponent } from './qlgioi-thieu/qlgioi-thieu.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { EscapeHtmlPipeGioiThieuCSTY } from '../shared/Pipe/EscapeHtmlPipeGioiThieuCSTY.pipe';


@NgModule({
  imports: [
    CommonModule,
    CoSoYteQlRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  declarations: [
    CoSoYteQlComponent, 
    HomeYteComponent, 
    ChangePassCstyComponent, 
    ChangeProfileCstyComponent, 
    QlgioiThieuComponent,
    EscapeHtmlPipeGioiThieuCSTY,
  ]
})
export class CoSoYteQlModule { }
