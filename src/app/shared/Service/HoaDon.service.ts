import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { HoaDonModel } from '../Model/HoaDon.model';
import { SessionService } from './session.service';
import { ShopService } from './Shop.service';
import { ChiTietHoaDonModel } from '../Model/ChiTietHoaDon.model';

@Injectable()

export class HoaDonService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }
    hoaDonListProperty: HoaDonModel[];

    url: string;

    create(hoaDon: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/create';
        return this.apiService.post(this.url, hoaDon);
    }

    updateTrangThai(hoaDonId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/updatetrangthai/' + hoaDonId;
        return this.apiService.get(this.url);
    }

    delete(HoaDonId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/delete/' + HoaDonId;
        return this.apiService.get(this.url);
    }

    Update(HoaDon: HoaDonModel) {
        this.url = 'http://petcare.somee.com/api/hoadon/update';
        return this.apiService.put(this.url, HoaDon);
    }

    view(HoaDonId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/getbyid/' + HoaDonId;
        return this.apiService.get(this.url);
    }

    countHoaDon(idShop: number): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/listcounthoadonshop/' + idShop;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    viewHoaDonVoiIdShop(idShop: number) {
        this.url = 'http://petcare.somee.com/api/hoadon/getallbyidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    viewHoaDonVoiIdNguoiDung(idNguoiDung: number) {
        this.url = 'http://petcare.somee.com/api/hoadon/getallbyidnguoidung/' + idNguoiDung;
        return this.apiService.get(this.url);
    }

    viewCTHoaDonVoiIdHoaDon(idHoaDon: number) {
        this.url = 'http://petcare.somee.com/api/hoadon/getallcthdbyidhoadon/' + idHoaDon;
        return this.apiService.get(this.url);
    }

    hoaDonListWithIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewHoaDonVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.hoaDonListProperty = res1.data;
            });
        });
    }

    huyDonHangForShop(hoaDonId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/huydonhangforshop/' + hoaDonId;
        return this.apiService.get(this.url);
    }

    huyDonHangForNguoiDung(hoaDonId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/hoadon/huydonhangfornguoidung/' + hoaDonId;
        return this.apiService.get(this.url);
    }

    kiemTraVaThanhToan(cthd: any[], idNguoiDung: any): Observable<any>  {
        this.url = 'http://petcare.somee.com/api/hoadon/checkcthoadonandcreatehoadon/' + idNguoiDung;
        return this.apiService.post(this.url, cthd);
    }

    kiemTraSanPham(cthd: any[]): Observable<any>  {
        this.url = 'http://petcare.somee.com/api/hoadon/checkcthoadon';
        return this.apiService.post(this.url, cthd);
    }

}
