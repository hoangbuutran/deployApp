import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucKhoeThuCungRoutingModule } from './suc-khoe-thu-cung-routing.module';
import { SucKhoeThuCungComponent } from './suc-khoe-thu-cung.component';
import { SucKhoeThuCungHomeComponent } from './suc-khoe-thu-cung-home/suc-khoe-thu-cung-home.component';
import { SucKhoeThuCungListComponent } from './suc-khoe-thu-cung-list/suc-khoe-thu-cung-list.component';

@NgModule({
  imports: [
    CommonModule,
    SucKhoeThuCungRoutingModule
  ],
  declarations: [
    SucKhoeThuCungComponent, 
    SucKhoeThuCungHomeComponent, 
    SucKhoeThuCungListComponent, 
  ]
})
export class SucKhoeThuCungModule { }
