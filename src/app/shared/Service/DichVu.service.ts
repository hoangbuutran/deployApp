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

export class DichVuService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    dichVuListProperty: any[];
    dichVuForTrueListProperty: any[];
    url: string;

    create(dichVu: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/create';
        return this.apiService.post(this.url, dichVu);
    }

    KhoaMo(dichVuId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/khoamo/' + dichVuId;
        return this.apiService.get(this.url);
    }

    delete(dichVuId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/delete/' + dichVuId;
        return this.apiService.get(this.url);
    }

    Update(dichVu: any) {
        this.url = 'http://petcare.somee.com/api/dich-vu/update';
        return this.apiService.put(this.url, dichVu);
    }

    view(dichVuId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/get-by-id/' + dichVuId;
        return this.apiService.get(this.url);
    }


    search(searchString: string): Observable<any[]> {
        this.url = 'http://petcare.somee.com/api/dich-vu/search-key/' + searchString;
        return this.apiService.get(this.url);
    }

    viewDichVuVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/get-all-with-id-cosothuy/' + cSYTId;
        return this.apiService.get(this.url);
    }

    dichVuListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewDichVuVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.dichVuListProperty = res1.data;
            });
        });
    }

    viewDichVuForTrueVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/dich-vu/get-all-with-id-cosothuy-for-true/' + cSYTId;
        return this.apiService.get(this.url);
    }

    dichVuForTrueListVoiCSYT(IdCoSoThuY: number | string) {
        this.viewDichVuForTrueVoiCSYT(IdCoSoThuY).subscribe(res1 => {
            this.dichVuForTrueListProperty = res1.data;
        });
    }
}
