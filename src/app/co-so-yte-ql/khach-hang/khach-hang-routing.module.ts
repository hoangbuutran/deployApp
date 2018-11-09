import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhachHangComponent } from './khach-hang.component';
import { KhachHangDetailComponent } from './khach-hang-detail/khach-hang-detail.component';
import { KhachHangListComponent } from './khach-hang-list/khach-hang-list.component';
import { ThuCungDetailWithKhachHangComponent } from './thu-cung-detail-with-khach-hang/thu-cung-detail-with-khach-hang.component';

const routes: Routes = [
  {
    path: '',
    component: KhachHangComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: KhachHangListComponent },
      { path: 'detail/:IdNguoiDung', component: KhachHangDetailComponent },
      { path: 'thucungdetailwithkhachhang/:IdThuCung', component: ThuCungDetailWithKhachHangComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhachHangRoutingModule { }
