import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlshopComponent } from './qlshop.component';
import { QlshopListComponent } from './qlshop-list/qlshop-list.component';
import { QlshopAddComponent } from './qlshop-add/qlshop-add.component';
import { QlshopListChuaDuyetComponent } from './qlshop-list-chua-duyet/qlshop-list-chua-duyet.component';

const routes: Routes = [
  {
    path: '',
    component: QlshopComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: QlshopListComponent },
      { path: 'add', component: QlshopAddComponent },
      { path: 'chuaduyet', component: QlshopListChuaDuyetComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlshopRoutingModule { }
