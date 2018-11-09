import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { CoSoThuYService } from './CoSoThuY.service';

@Injectable()

export class LichSuKhamService {

    sessionuser: any;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
    ) { }

    url: string;

    create(phieuHenKham: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/lich-su-kham/create';
        return this.apiService.post(this.url, phieuHenKham);
    }

    delete(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/lich-su-kham/delete/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    Update(phieuHenKham: any) {
        this.url = 'http://petcare.somee.com/api/lich-su-kham/update';
        return this.apiService.put(this.url, phieuHenKham);
    }

    view(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/lich-su-kham/get-by-id/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    getAllWithIdThuCung(idThuCung: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/lich-su-kham/get-all-with-id-thucung/' + idThuCung;
        return this.apiService.get(this.url);
    }

}
