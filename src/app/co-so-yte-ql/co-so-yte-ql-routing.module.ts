import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';
import { ChangePassCstyComponent } from './change-pass-csty/change-pass-csty.component';
import { ChangeProfileCstyComponent } from './change-profile-csty/change-profile-csty.component';
import { QlgioiThieuComponent } from './qlgioi-thieu/qlgioi-thieu.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoYteQlComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeYteComponent },
      { path: 'khachhang', loadChildren: './khach-hang/khach-hang.module#KhachHangModule' },
      { path: 'qldichvu', loadChildren: './qldich-vu/qldich-vu.module#QldichVuModule' },
      { path: 'qlgioithieu', component: QlgioiThieuComponent },
      { path: 'qlhoatdong', loadChildren: './qlhoat-dong/qlhoat-dong.module#QlhoatDongModule' },
      { path: 'qlphieuhenkham', loadChildren: './qlphieu-hen-kham/qlphieu-hen-kham.module#QlphieuHenKhamModule' },
      { path: 'qlsuckhoethucung', loadChildren: './qlsuc-khoe-thu-cung/qlsuc-khoe-thu-cung.module#QlsucKhoeThuCungModule' },
      { path: 'changepass', component: ChangePassCstyComponent },
      { path: 'changeprofile/:IdCoSoThuY', component: ChangeProfileCstyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoYteQlRoutingModule { }
