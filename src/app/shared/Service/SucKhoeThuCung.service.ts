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

export class SucKhoeThuCungService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    sucKhoeThuCungGetAllListProperty: any[];
    sucKhoeThuCungListProperty: any[];
    sucKhoeThuCungForTrueListProperty: any[];
    url: string;

    create(sucKhoeThuCung: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/create';
        return this.apiService.post(this.url, sucKhoeThuCung);
    }

    KhoaMo(sucKhoeThuCungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/khoamo/' + sucKhoeThuCungId;
        return this.apiService.get(this.url);
    }

    upFile(idSucKhoeThuCung: string, fileToUpload: any): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('ImageShow', fileToUpload, fileToUpload.name);
        formData.append('Id', idSucKhoeThuCung);
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/uploadimage';
        return this.http.post(this.url, formData);
    }

    delete(sucKhoeThuCungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/delete/' + sucKhoeThuCungId;
        return this.apiService.get(this.url);
    }

    Update(sucKhoeThuCung: any) {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/update';
        return this.apiService.put(this.url, sucKhoeThuCung);
    }

    view(sucKhoeThuCungId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/get-by-id/' + sucKhoeThuCungId;
        return this.apiService.get(this.url);
    }


    search(searchString: string): Observable<any[]> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/search-key/' + searchString;
        return this.apiService.get(this.url);
    }

    viewsucKhoeThuCungVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/get-all-with-id-cosothuy/' + cSYTId;
        return this.apiService.get(this.url);
    }

    sucKhoeThuCungListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewsucKhoeThuCungVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.sucKhoeThuCungListProperty = res1.data;
            });
        });
    }

    viewsucKhoeThuCungForTrueVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/get-all-with-id-cosothuy-for-true/' + cSYTId;
        return this.apiService.get(this.url);
    }

    sucKhoeThuCungForTrueListVoiCSYT(IdCoSoThuY: number | string) {
        this.viewsucKhoeThuCungForTrueVoiCSYT(IdCoSoThuY).subscribe(res => {
            this.sucKhoeThuCungForTrueListProperty = res.data;
        });
    }

    viewsucKhoeThuCungGetAll(): Observable<any> {
        this.url = 'http://petcare.somee.com/api/suc-khoe-thu-cung/get-all-for-true/';
        return this.apiService.get(this.url);
    }
    sucKhoeThuCungGetAllListVoiCSYT() {

        this.viewsucKhoeThuCungGetAll().subscribe(res => {
            this.sucKhoeThuCungGetAllListProperty = res.data;
        });

    }
}
