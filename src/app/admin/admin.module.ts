import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminComponent, HomeComponent, ErrorComponent, ChangePassComponent]
})
export class AdminModule { }
