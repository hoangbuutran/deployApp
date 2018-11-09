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

export class PhieuHenKhamService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    phieuHenKhamListProperty: any[];
    phieuHenKhamListIdNguoiDungProperty: any[];
    url: string;

    duyetPhieuHenKham(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/duyet-phieu-hen-kham/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    tuChoiPhieuHenKham(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/tu-choi-phieu-hen-kham/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    create(phieuHenKham: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/create';
        return this.apiService.post(this.url, phieuHenKham);
    }

    phieuVoiNgay(phieuVoiNgay: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/phieu-voi-ngay';
        return this.apiService.post(this.url, phieuVoiNgay);
    }

    delete(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/delete/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    Update(phieuHenKham: any) {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/update';
        return this.apiService.put(this.url, phieuHenKham);
    }

    view(phieuHenKhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/get-by-id/' + phieuHenKhamId;
        return this.apiService.get(this.url);
    }

    viewphieuHenKhamVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/get-all-with-id-cosothuy/' + cSYTId;
        return this.apiService.get(this.url);
    }

    phieuHenKhamListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewphieuHenKhamVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.phieuHenKhamListProperty = res1.data;
            });
        });
    }

    viewphieuHenKhamVoiIdNguoiDung(idNguoiDung: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/phieu-hen-kham/get-all-with-id-nguoi-dung/' + idNguoiDung;
        return this.apiService.get(this.url);
    }

    phieuHenKhamIdNguoiDungListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewphieuHenKhamVoiIdNguoiDung(res.data.IdCoSoThuY).subscribe(res1 => {
                this.phieuHenKhamListIdNguoiDungProperty = res1.data;
            });
        });
    }
}
