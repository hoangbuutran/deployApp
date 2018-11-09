import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuyenMucComponent } from './chuyen-muc.component';
import { ChuyenMucAddComponent } from './chuyen-muc-add/chuyen-muc-add.component';
import { ChuyenMucListComponent } from './chuyen-muc-list/chuyen-muc-list.component';
import { ChuyenMucEditComponent } from './chuyen-muc-edit/chuyen-muc-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ChuyenMucComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: ChuyenMucAddComponent },
      { path: 'list', component: ChuyenMucListComponent },
      { path: 'edit/:IdChuyenMuc', component: ChuyenMucEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChuyenMucRoutingModule { }
