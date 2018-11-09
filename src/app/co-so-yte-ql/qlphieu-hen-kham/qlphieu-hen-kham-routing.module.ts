import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlphieuHenKhamComponent } from './qlphieu-hen-kham.component';
import { QlphieuHenKhamListComponent } from './qlphieu-hen-kham-list/qlphieu-hen-kham-list.component';
import { QlphieuHenKhamDetailComponent } from './qlphieu-hen-kham-detail/qlphieu-hen-kham-detail.component';

const routes: Routes = [
  {
    path: '',
    component: QlphieuHenKhamComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QlphieuHenKhamListComponent },
      { path: 'detail/:IdLichHenKham', component: QlphieuHenKhamDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlphieuHenKhamRoutingModule { }
