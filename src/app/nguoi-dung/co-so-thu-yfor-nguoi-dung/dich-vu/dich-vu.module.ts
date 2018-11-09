import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuRoutingModule } from './dich-vu-routing.module';
import { DichVuComponent } from './dich-vu.component';
import { DichVuHomeComponent } from './dich-vu-home/dich-vu-home.component';
import { DichVuDetailComponent } from './dich-vu-detail/dich-vu-detail.component';
import { EscapeHtmlPipeForDichVu } from '../../../shared/Pipe/EscapeHtmlPipeForDichVu.pipe';

@NgModule({
  imports: [
    CommonModule,
    DichVuRoutingModule
  ],
  declarations: [
    DichVuComponent, 
    DichVuHomeComponent, 
    DichVuDetailComponent,
    EscapeHtmlPipeForDichVu,
  ]
})
export class DichVuModule { }
