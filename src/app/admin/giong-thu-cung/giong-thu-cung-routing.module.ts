import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiongThuCungComponent } from './giong-thu-cung.component';
import { GiongThuCungAddComponent } from './giong-thu-cung-add/giong-thu-cung-add.component';
import { GiongThuCungListComponent } from './giong-thu-cung-list/giong-thu-cung-list.component';
import { GiongThuCungEditComponent } from './giong-thu-cung-edit/giong-thu-cung-edit.component';

const routes: Routes = [
  {
    path: '',
    component: GiongThuCungComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: GiongThuCungAddComponent },
      { path: 'list', component: GiongThuCungListComponent },
      { path: 'edit/:IdGiongThuCung', component: GiongThuCungEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiongThuCungRoutingModule { }
