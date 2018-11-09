import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlbaiVietAdminRoutingModule } from './qlbai-viet-admin-routing.module';
import { QlbaiVietAdminComponent } from './qlbai-viet-admin.component';
import { QlbaiVietHomeComponent } from './qlbai-viet-home/qlbai-viet-home.component';

@NgModule({
  imports: [
    CommonModule,
    QlbaiVietAdminRoutingModule
  ],
  declarations: [QlbaiVietAdminComponent, QlbaiVietHomeComponent]
})
export class QlbaiVietAdminModule { }
