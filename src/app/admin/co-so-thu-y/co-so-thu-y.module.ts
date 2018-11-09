import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoThuYRoutingModule } from './co-so-thu-y-routing.module';
import { CoSoThuYComponent } from './co-so-thu-y.component';
import { CoSoThuYlistComponent } from './co-so-thu-ylist/co-so-thu-ylist.component';
import { CoSoThuYaddComponent } from './co-so-thu-yadd/co-so-thu-yadd.component';
import { CoSoThuYeditComponent } from './co-so-thu-yedit/co-so-thu-yedit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoSoThuYRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [CoSoThuYComponent, CoSoThuYlistComponent, CoSoThuYaddComponent, CoSoThuYeditComponent]
})
export class CoSoThuYModule { }
