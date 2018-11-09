import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoaDonComponent } from './hoa-don.component';
import { HoaDonListComponent } from './hoa-don-list/hoa-don-list.component';
import { HoaDonDetailComponent } from './hoa-don-detail/hoa-don-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HoaDonComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: HoaDonListComponent },
      { path: 'view/:IdHoaDon', component: HoaDonDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoaDonRoutingModule { }
