import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlsucKhoeThuCungComponent } from './qlsuc-khoe-thu-cung.component';
import { QlsucKhoeThuCungListComponent } from './qlsuc-khoe-thu-cung-list/qlsuc-khoe-thu-cung-list.component';
import { QlsucKhoeThuCungAddComponent } from './qlsuc-khoe-thu-cung-add/qlsuc-khoe-thu-cung-add.component';
import { QlsucKhoeThuCungEditComponent } from './qlsuc-khoe-thu-cung-edit/qlsuc-khoe-thu-cung-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QlsucKhoeThuCungComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QlsucKhoeThuCungListComponent },
      { path: 'add', component: QlsucKhoeThuCungAddComponent },
      { path: 'edit/:IdSKTC', component: QlsucKhoeThuCungEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlsucKhoeThuCungRoutingModule { }
