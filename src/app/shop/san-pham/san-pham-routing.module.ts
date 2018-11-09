import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanPhamComponent } from './san-pham.component';
import { SanPhamAddComponent } from './san-pham-add/san-pham-add.component';
import { SanPhamListComponent } from './san-pham-list/san-pham-list.component';
import { SanPhamEditComponent } from './san-pham-edit/san-pham-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SanPhamComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: SanPhamAddComponent },
      { path: 'list', component: SanPhamListComponent },
      { path: 'edit/:IdSanPham', component: SanPhamEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanPhamRoutingModule { }
