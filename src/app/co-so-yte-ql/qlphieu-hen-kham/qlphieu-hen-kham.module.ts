import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlphieuHenKhamRoutingModule } from './qlphieu-hen-kham-routing.module';
import { QlphieuHenKhamComponent } from './qlphieu-hen-kham.component';
import { QlphieuHenKhamListComponent } from './qlphieu-hen-kham-list/qlphieu-hen-kham-list.component';
import { QlphieuHenKhamDetailComponent } from './qlphieu-hen-kham-detail/qlphieu-hen-kham-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    QlphieuHenKhamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [QlphieuHenKhamComponent, QlphieuHenKhamListComponent, QlphieuHenKhamDetailComponent]
})
export class QlphieuHenKhamModule { }
