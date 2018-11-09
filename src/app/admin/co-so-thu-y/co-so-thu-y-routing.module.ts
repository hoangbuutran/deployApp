import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoThuYComponent } from './co-so-thu-y.component';
import { CoSoThuYaddComponent } from './co-so-thu-yadd/co-so-thu-yadd.component';
import { CoSoThuYlistComponent } from './co-so-thu-ylist/co-so-thu-ylist.component';
import { CoSoThuYeditComponent } from './co-so-thu-yedit/co-so-thu-yedit.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoThuYComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: CoSoThuYaddComponent },
      { path: 'list', component: CoSoThuYlistComponent },
      { path: 'edit/:IdCoSoThuY', component: CoSoThuYeditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoThuYRoutingModule { }
