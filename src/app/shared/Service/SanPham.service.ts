import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SanPhamModel } from '../Model/SanPham.model';
import { SessionService } from './session.service';
import { ShopService } from './Shop.service';

@Injectable()

export class SanPhamService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }
    sanPhamListProperty: SanPhamModel[];
    sanPhamListWithLoaiSanPhamProperty: SanPhamModel[];
    toTal: number;
    url: string;

    create(sanPham: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/sanpham/create';
        return this.apiService.post(this.url, sanPham);
    }

    KhoaMo(sanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/sanpham/khoamo/' + sanPhamId;
        return this.apiService.get(this.url);
    }

    delete(sanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/sanpham/delete/' + sanPhamId;
        return this.apiService.get(this.url);
    }

    upFile(idSanPham: string, fileToUpload: any): Observable<any> {
        // upFile(idSanPham: string, fileToUpload: any) {
        const formData: FormData = new FormData();
        formData.append('Image', fileToUpload, fileToUpload.name);
        formData.append('IdSanPham', idSanPham);
        this.url = 'http://petcare.somee.com/api/giongthucung/uploadimage';

        console.log(fileToUpload);

        return this.http.post(this.url, formData);
    }

    uploadFiles(idSanPham: string, myFiles: any): Observable<any> {
        const frmData = new FormData();
        frmData.append('fileUpload', myFiles);
        frmData.append('IdSanPham', idSanPham);
        this.url = 'http://petcare.somee.com/api/hinhanhsanpham/uploadimage';
        return this.http.post(this.url, frmData);
    }

    Update(sanPham: SanPhamModel) {
        this.url = 'http://petcare.somee.com/api/sanpham/update';
        return this.apiService.put(this.url, sanPham);
    }

    view(sanPhamId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/sanpham/getbyid/' + sanPhamId;
        return this.apiService.get(this.url);
    }

    countSanPham(idShop: number): Observable<any> {
        this.url = 'http://petcare.somee.com/api/sanpham/listcountsanphamwithidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    viewSanPhamVoiIdShop(idShop: number) {
        this.url = 'http://petcare.somee.com/api/sanpham/getallbyidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    viewSanPhamVoiIdLoaiSanPham(idLoaiSanPham: number) {
        this.url = 'http://petcare.somee.com/api/sanpham/getallbyidloaisanpham/' + idLoaiSanPham;
        return this.apiService.get(this.url);
    }

    sanPhamListWithIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewSanPhamVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.sanPhamListProperty = res1.data;
                this.toTal = res1.toTal;
            });
        });
    }

    viewLoaiSanPhamVoiSanPham() {
        this.url = 'http://petcare.somee.com/api/loaisanpham/getallloaisanphamwithsanpham';
        return this.apiService.get(this.url);
    }
}
