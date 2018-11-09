import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuyenAddComponent } from './quyen-add/quyen-add.component';
import { QuyenComponent } from './quyen.component';
import { QuyenListComponent } from './quyen-list/quyen-list.component';
import { QuyenEditComponent } from './quyen-edit/quyen-edit.component';
import { QuyenDetailComponent } from './quyen-detail/quyen-detail.component';

const routes: Routes = [
  {
    path: '',
    component: QuyenComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: QuyenAddComponent },
      { path: 'list', component: QuyenListComponent },
      { path: 'edit/:IdQuyen', component: QuyenEditComponent },
      { path: 'detail/:IdQuyen', component: QuyenDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuyenRoutingModule { }
