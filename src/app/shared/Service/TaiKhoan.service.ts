import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { LoginModel } from '../Model/Login.model';
import { TaiKhoanModel } from '../Model/TaiKhoan.model';


@Injectable()

export class TaiKhoanService {
    constructor(
        private apiService: ApiService,
    ) { }
    url: string;

    Login(loginModel: LoginModel) {
        this.url = 'http://petcare.somee.com/api/taikhoan/login';
        return this.apiService.post(this.url, loginModel);
    }

    Register(RegisterModel: any) {
        this.url = 'http://petcare.somee.com/api/taikhoan/createnguoidung';
        return this.apiService.post(this.url, RegisterModel);
    }

    ForgotPass(EmailForm: any) {
        this.url = 'http://petcare.somee.com/api/taikhoan/sendmailforgotpasss';
        return this.apiService.post(this.url, EmailForm);
    }

    view(taiKhoanId: number | string) {
        this.url = 'http://petcare.somee.com/api/taikhoan/getbyid/' + taiKhoanId;
        return this.apiService.get(this.url);
    }

    ChangePass(ChangePassModel: any) {
        this.url = 'http://petcare.somee.com/api/taikhoan/doimatkhau';
        return this.apiService.post(this.url, ChangePassModel);
    }
}
