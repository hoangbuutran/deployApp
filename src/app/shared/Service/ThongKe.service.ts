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
import { ShopService } from './Shop.service';
import { database } from 'firebase';

@Injectable()

export class ThongKeService {
    thongKe5SanPhamMaxDayProperty: any;
    thongKe10SanPhamMaxMonProperty: any;
    listHoaDonTheoThang: any;
    listHoaDonTrongKhoangThang: any;
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }

    url: string;

    // thống kê 5 sản phẩm bán chạy nhất trong ngày
    viewThongKe5SanPhamMaxDayVoiIdShop(idShop: number) {
        this.url = 'http://petcare.somee.com/api/thongkebaocao/Lay_Ra_5_San_Pham_Max_Trong_Ngay/' + idShop;
        return this.apiService.get(this.url);
    }




    thongKeView5SanPhamMaxDayVoiIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewThongKe5SanPhamMaxDayVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.thongKe5SanPhamMaxDayProperty = res1.data;
            });
        });
    }

    // thống kê 10 sản phẩm bán chạy nhất trong tháng
    viewThongKe10SanPhamMaxMonVoiIdShop(idShop: number, fromNgayThang: any) {
        this.url = 'http://petcare.somee.com/api/thongkebaocao/Lay_Ra_10_San_Pham_Max_Trong_Thang/' + idShop;
        return this.apiService.post(this.url, fromNgayThang);
    }
    thongKeView10SanPhamMaxMonVoiIdShop(fromNgayThang: any) {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewThongKe10SanPhamMaxMonVoiIdShop(res.data.IdShop, fromNgayThang).subscribe(res1 => {
                this.thongKe10SanPhamMaxMonProperty = res1.data;
            });
        });
    }

    // thống kê hóa đơn theo tháng được chọn
    viewThongKeHoaDonTheoThangVoiIdShop(idShop: number,  fromNgayThang: any) {
        this.url = 'http://petcare.somee.com/api/thongkebaocao/Hoa_Don_Theo_Thang/' + idShop;
        return this.apiService.post(this.url, fromNgayThang);
    }
    thongKeViewHoaDonTheoThangVoiIdShop(fromNgayThang: any) {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewThongKeHoaDonTheoThangVoiIdShop(res.data.IdShop, fromNgayThang).subscribe(res1 => {
                this.listHoaDonTheoThang = res1.data;
            });
        });
    }

    // thống kê hóa đơn theo khoảng tháng được chọn
    viewThongKeHoaDonTheoKhoangThangVoiIdShop(idShop: number, fromNgayThang: any) {
        this.url = 'http://petcare.somee.com/api/thongkebaocao/Hoa_Don_Trong_Thang/' + idShop;
        return this.apiService.post(this.url, fromNgayThang);
    }
    thongKeViewHoaDonTheoKhoangThangVoiIdShop(fromNgayThang: any) {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewThongKeHoaDonTheoKhoangThangVoiIdShop(res.data.IdShop, fromNgayThang).subscribe(res1 => {
                this.listHoaDonTrongKhoangThang = res1.data;
            });
        });
    }
}
