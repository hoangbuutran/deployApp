import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QldichVuComponent } from './qldich-vu.component';
import { QldichVuListComponent } from './qldich-vu-list/qldich-vu-list.component';
import { QldichVuAddComponent } from './qldich-vu-add/qldich-vu-add.component';
import { QldichVuEditComponent } from './qldich-vu-edit/qldich-vu-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QldichVuComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QldichVuListComponent },
      { path: 'add', component: QldichVuAddComponent },
      { path: 'edit/:IdDichVu', component: QldichVuEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QldichVuRoutingModule { }
