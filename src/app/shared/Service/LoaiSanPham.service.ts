import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { LoaiSanPhamModel } from '../Model/LoaiSanPham.model';
import { SessionService } from './session.service';
import { ShopService } from './Shop.service';

@Injectable()

export class LoaiSanPhamService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }
    loaiSanPhamListProperty: LoaiSanPhamModel[];

    url: string;
    idShop;
    create(loaiSanPham: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/create';
        return this.apiService.post(this.url, loaiSanPham);
    }

    KhoaMo(loaiSanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/khoamo/' + loaiSanPhamId;
        return this.apiService.get(this.url);
    }

    delete(loaiSanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/delete/' + loaiSanPhamId;
        return this.apiService.get(this.url);
    }
    Update(loaiSanPham: LoaiSanPhamModel) {
        this.url = 'http://petcare.somee.com/api/loaisanpham/update';
        return this.apiService.put(this.url, loaiSanPham);
    }

    view(loaiSanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/getbyid/' + loaiSanPhamId;
        return this.apiService.get(this.url);
    }

    viewForTrue(idShop: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/getallbyidshopfortrue/' + idShop;
        return this.apiService.get(this.url);
    }

    countLoaiSanPham(idShop: number): Observable<any> {
        this.url = 'http://petcare.somee.com/api/loaisanpham/listcountloaisanphamwithidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    viewLoaiSanPhamVoiIdShop(idShop: number) {
        this.url = 'http://petcare.somee.com/api/loaisanpham/getallbyidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    loaiSanPhamListWithIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.idShop = res.data.IdShop;
            this.viewLoaiSanPhamVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.loaiSanPhamListProperty = res1.data;
            });
        });
    }
}
