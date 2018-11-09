import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoatDongRoutingModule } from './hoat-dong-routing.module';
import { HoatDongComponent } from './hoat-dong.component';
import { HoatDongHomeComponent } from './hoat-dong-home/hoat-dong-home.component';
import { HoatDongDetailComponent } from './hoat-dong-detail/hoat-dong-detail.component';
import { EscapeHtmlPipeHoatDong } from '../../../shared/Pipe/EscapeHtmlPipeHoatDong.pipi';

@NgModule({
  imports: [
    CommonModule,
    HoatDongRoutingModule
  ],
  declarations: [
    HoatDongComponent,
    HoatDongHomeComponent,
    HoatDongDetailComponent,
    EscapeHtmlPipeHoatDong
  ]
})
export class HoatDongModule { }
