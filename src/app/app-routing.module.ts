import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/Service/Auth.guard.service';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


const routesConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotPass', component: ForgotPassComponent },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
    { path: 'cosoyteql', loadChildren: './co-so-yte-ql/co-so-yte-ql.module#CoSoYteQlModule', canActivate: [AuthGuard] },
    { path: 'shop', loadChildren: './shop/shop.module#ShopModule', canActivate: [AuthGuard] },
    { path: 'nguoidung', loadChildren: './nguoi-dung/nguoi-dung.module#NguoiDungModule', canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
