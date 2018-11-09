import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiDungProfileRoutingModule } from './nguoi-dung-profile-routing.module';
import { NguoiDungProfileComponent } from './nguoi-dung-profile.component';
import { NguoiDungProfileHomeComponent } from './nguoi-dung-profile-home/nguoi-dung-profile-home.component';
import { NguoiDungProfileEditComponent } from './nguoi-dung-profile-edit/nguoi-dung-profile-edit.component';
import { ChangePassNguoiDungComponent } from './change-pass-nguoi-dung/change-pass-nguoi-dung.component';
import { TaoMoiBaiDangComponent } from './tao-moi-bai-dang/tao-moi-bai-dang.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaiVietDetailProfileComponent } from './bai-viet-detail-profile/bai-viet-detail-profile.component';

@NgModule({
  imports: [
    CommonModule,
    NguoiDungProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [NguoiDungProfileComponent, NguoiDungProfileHomeComponent, NguoiDungProfileEditComponent, ChangePassNguoiDungComponent, TaoMoiBaiDangComponent, BaiVietDetailProfileComponent]
})
export class NguoiDungProfileModule { }
