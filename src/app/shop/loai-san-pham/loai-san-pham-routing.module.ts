import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaiSanPhamListComponent } from './loai-san-pham-list/loai-san-pham-list.component';
import { LoaiSanPhamComponent } from './loai-san-pham.component';
import { LoaiSanPhamAddComponent } from './loai-san-pham-add/loai-san-pham-add.component';
import { LoaiSanPhamEditComponent } from './loai-san-pham-edit/loai-san-pham-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LoaiSanPhamComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: LoaiSanPhamAddComponent },
      { path: 'list', component: LoaiSanPhamListComponent },
      { path: 'edit/:IdLoaiSanPham', component: LoaiSanPhamEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoaiSanPhamRoutingModule { }
