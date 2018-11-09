import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { HinhAnhSanPhamModel } from '../Model/HinhAnhSanPham.model';
import { SessionService } from './session.service';
import { ShopService } from './Shop.service';

@Injectable()

export class HinhAnhSanPhamService {

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
    ) { }

    url: string;

    delete(sanphamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hinhanhsanpham/delete/' + sanphamId;
        return this.apiService.get(this.url);
    }

    viewHinhAnhSanPhamVoiIdSanPham(idSanPham: number | string) {
        this.url = 'http://petcare.somee.com/api/hinhanhsanpham/getallwithidsanpham/' + idSanPham;
        return this.apiService.get(this.url);
    }

}
