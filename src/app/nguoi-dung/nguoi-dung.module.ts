import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiDungRoutingModule } from './nguoi-dung-routing.module';
import { NguoiDungComponent } from './nguoi-dung.component';
import { HomeNguoiDungComponent } from './home-nguoi-dung/home-nguoi-dung.component';
import { CartComponent } from './cart/cart.component';
import { HoaDonDaMuaComponent } from './hoa-don-da-mua/hoa-don-da-mua.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NguoiDungRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    NguoiDungComponent, 
    HomeNguoiDungComponent, 
    CartComponent, 
    HoaDonDaMuaComponent,
  ]
})
export class NguoiDungModule { }
