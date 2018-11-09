import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlhoatDongComponent } from './qlhoat-dong.component';
import { QlhoatDongListComponent } from './qlhoat-dong-list/qlhoat-dong-list.component';
import { QlhoatDongAddComponent } from './qlhoat-dong-add/qlhoat-dong-add.component';
import { QlhoatDongEditComponent } from './qlhoat-dong-edit/qlhoat-dong-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QlhoatDongComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QlhoatDongListComponent },
      { path: 'add', component: QlhoatDongAddComponent },
      { path: 'edit/:IdHoatDong', component: QlhoatDongEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlhoatDongRoutingModule { }
