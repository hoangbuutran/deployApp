import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuComponent } from './dich-vu.component';
import { DichVuHomeComponent } from './dich-vu-home/dich-vu-home.component';
import { DichVuDetailComponent } from './dich-vu-detail/dich-vu-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DichVuComponent,
    children: [
      { path: '', redirectTo: 'home/:IdCoSoThuY', pathMatch: 'full' },
      { path: 'home/:IdCoSoThuY', component: DichVuHomeComponent },
      { path: 'detail/:IdDichVu', component: DichVuDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuRoutingModule { }
