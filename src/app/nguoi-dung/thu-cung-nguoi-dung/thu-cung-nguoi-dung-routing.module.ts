import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThuCungNguoiDungComponent } from './thu-cung-nguoi-dung.component';
import { ThuCungNguoiDungHomeComponent } from './thu-cung-nguoi-dung-home/thu-cung-nguoi-dung-home.component';

const routes: Routes = [
  {
    path: '',
    component: ThuCungNguoiDungComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ThuCungNguoiDungHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThuCungNguoiDungRoutingModule { }
