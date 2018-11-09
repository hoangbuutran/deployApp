import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BinhLuanModel } from '../Model/BinhLuan.model';

@Injectable()

export class BinhLuanService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
    ) { }

    listbinhLuanWithIdBaiViet: BinhLuanModel[];
    url: string;

    create(binhLuan: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/binhluan/create';
        return this.apiService.post(this.url, binhLuan);
    }

    delete(binhLuanId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/binhluan/delete/' + binhLuanId;
        return this.apiService.get(this.url);
    }

    Update(binhLuan: BinhLuanModel) {
        this.url = 'http://petcare.somee.com/api/binhluan/update';
        return this.apiService.put(this.url, binhLuan);
    }

    viewBinhLuanVoiIdBaiViet(idBaiViet: number | string) {
        this.url = 'http://petcare.somee.com/api/binhluan/getallbinhLuanwithidBaiViet/' + idBaiViet;
        return this.apiService.get(this.url).subscribe(res => {
            this.listbinhLuanWithIdBaiViet = res.data;
        });
    }

}
