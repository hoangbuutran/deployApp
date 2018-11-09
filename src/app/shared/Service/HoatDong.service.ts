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

export class HoatDongService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    hoatDongListProperty: any[];
    hoatDongForTrueListProperty: any[];
    url: string;

    create(hoatDong: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/create';
        return this.apiService.post(this.url, hoatDong);
    }

    upFile(idHoatDong: string, fileToUpload: any): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('ImageShow', fileToUpload, fileToUpload.name);
        formData.append('Id', idHoatDong);
        this.url = 'http://petcare.somee.com/api/hoat-dong/uploadimage';
        return this.http.post(this.url, formData);
    }

    KhoaMo(hoatDongId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/khoamo/' + hoatDongId;
        return this.apiService.get(this.url);
    }

    delete(hoatDongId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/delete/' + hoatDongId;
        return this.apiService.get(this.url);
    }

    Update(hoatDong: any) {
        this.url = 'http://petcare.somee.com/api/hoat-dong/update';
        return this.apiService.put(this.url, hoatDong);
    }

    view(hoatDongId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/get-by-id/' + hoatDongId;
        return this.apiService.get(this.url);
    }


    search(searchString: string): Observable<any[]> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/search-key/' + searchString;
        return this.apiService.get(this.url);
    }

    viewhoatDongVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/get-all-with-id-cosothuy/' + cSYTId;
        return this.apiService.get(this.url);
    }

    hoatDongListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewhoatDongVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.hoatDongListProperty = res1.data;
            });
        });
    }

    viewhoatDongForTrueVoiCSYT(IdCoSoThuY: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoat-dong/get-all-with-id-cosothuy-for-true/' + IdCoSoThuY;
        return this.apiService.get(this.url);
    }

    hoatDongForTrueListVoiCSYT(IdCoSoThuY: number | string) {
        this.viewhoatDongForTrueVoiCSYT(IdCoSoThuY).subscribe(res => {
            this.hoatDongForTrueListProperty = res.data;
        });
    }
}
