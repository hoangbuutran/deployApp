import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CoSoThuYModel } from '../Model/CoSoThuY.model';

@Injectable()

export class CoSoThuYService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient
    ) { }
    coSoThuYListProperty: CoSoThuYModel[];

    url: string;

    create(coSoThuY: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/create';
        return this.apiService.post(this.url, coSoThuY);
    }

    KhoaMo(coSoThuYId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/khoamo/' + coSoThuYId;
        return this.apiService.get(this.url);
    }

    delete(coSoThuYId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/delete/' + coSoThuYId;
        return this.apiService.get(this.url);
    }
    Update(coSoThuY: CoSoThuYModel) {
        this.url = 'http://petcare.somee.com/api/cosothuy/update';
        return this.apiService.put(this.url, coSoThuY);
    }

    view(coSoThuYId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/getbyid/' + coSoThuYId;
        return this.apiService.get(this.url);
    }

    viewWithIdTaiKhoan(taiKhoanId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/getbyidtaikhoan/' + taiKhoanId;
        return this.apiService.get(this.url);
    }

    countCoSoThuY(): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/listcountcosothuy';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    xemTaiKhoanCoSoThuY(coSoThuYId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/taikhoan/getbyid/' + coSoThuYId;
        return this.apiService.get(this.url);
    }

    coSoThuYList() {
        this.url = 'http://petcare.somee.com/api/cosothuy/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.coSoThuYListProperty = res.data;
        });
    }
    coSoThuYListForNguoiDung(): Observable<any> {
        this.url = 'http://petcare.somee.com/api/cosothuy/getall';
        return this.apiService.get(this.url);
    }
}
