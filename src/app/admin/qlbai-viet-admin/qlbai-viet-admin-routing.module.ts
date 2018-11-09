import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlbaiVietAdminComponent } from './qlbai-viet-admin.component';
import { QlbaiVietHomeComponent } from './qlbai-viet-home/qlbai-viet-home.component';

const routes: Routes = [
  {
    path: '',
    component: QlbaiVietAdminComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QlbaiVietHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlbaiVietAdminRoutingModule { }
