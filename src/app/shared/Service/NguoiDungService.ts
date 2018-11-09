import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NguoiDungModel } from '../Model/NguoiDung.model';
import { SessionService } from './session.service';
import { CoSoThuYService } from './CoSoThuY.service';

@Injectable()

export class NguoiDungService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }
    nguoiDungListProperty: NguoiDungModel[];

    url: string;

    create(nguoiDung: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/create';
        return this.apiService.post(this.url, nguoiDung);
    }

    KhoaMo(nguoiDungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/khoamo/' + nguoiDungId;
        return this.apiService.get(this.url);
    }

    delete(nguoiDungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/delete/' + nguoiDungId;
        return this.apiService.get(this.url);
    }
    Update(nguoiDung: NguoiDungModel) {
        this.url = 'http://petcare.somee.com/api/nguoidung/update';
        return this.apiService.put(this.url, nguoiDung);
    }

    view(nguoiDungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/getbyid/' + nguoiDungId;
        return this.apiService.get(this.url);
    }

    viewNguoiDungVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/getallbyidcosoyte/' + cSYTId;
        return this.apiService.get(this.url);
    }

    viewNguoiDungVoiIDTaiKhoan(taiKhoanId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/getbyidtaikhoan/' + taiKhoanId;
        return this.apiService.get(this.url);
    }

    countNguoiDung(): Observable<any> {
        this.url = 'http://petcare.somee.com/api/nguoidung/listcountnguoidung';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    nguoiDungListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
          this.viewNguoiDungVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
            this.nguoiDungListProperty = res1.data;
          });
        });
    }
}
