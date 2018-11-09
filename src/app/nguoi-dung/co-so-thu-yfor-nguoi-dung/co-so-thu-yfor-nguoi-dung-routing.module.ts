import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoThuYforNguoiDungComponent } from './co-so-thu-yfor-nguoi-dung.component';
import { CoSoThuYhomeComponent } from './co-so-thu-yhome/co-so-thu-yhome.component';
import { DatLichKhamComponent } from './dat-lich-kham/dat-lich-kham.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoThuYforNguoiDungComponent,
    children: [
      { path: '', redirectTo: 'home/:IdCoSoThuY', pathMatch: 'full' },
      { path: 'home/:IdCoSoThuY', component: CoSoThuYhomeComponent },
      { path: 'datlichkham/:IdCoSoThuY', component: DatLichKhamComponent },
      { path: 'dichvu', loadChildren: './dich-vu/dich-vu.module#DichVuModule'},
      { path: 'hoatdong', loadChildren: './hoat-dong/hoat-dong.module#HoatDongModule'},
      { path: 'suckhoethucung', loadChildren: './suc-khoe-thu-cung/suc-khoe-thu-cung.module#SucKhoeThuCungModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoThuYforNguoiDungRoutingModule { }
