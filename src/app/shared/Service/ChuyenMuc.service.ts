import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ChuyenMucModel } from '../Model/ChuyenMuc.model';

@Injectable()

export class ChuyenMucService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient
    ) { }
    chuyenMucListProperty: ChuyenMucModel[];

    url: string;

    create(chuyenMuc: any): Observable<any> {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/create';
        return this.apiService.post(this.url, chuyenMuc);
    }

    KhoaMo(chuyenMucId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/khoamo/' + chuyenMucId;
        return this.apiService.get(this.url);
    }

    delete(chuyenMucId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/delete/' + chuyenMucId;
        return this.apiService.get(this.url);
    }
    Update(chuyenMuc: ChuyenMucModel) {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/update';
        return this.apiService.put(this.url, chuyenMuc);
    }

    view(chuyenMucId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/getbyid/' + chuyenMucId;
        return this.apiService.get(this.url);
    }

    countchuyenMuc(): Observable<any> {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/listcountchuyenmuc';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    chuyenMucList() {
        this.url = 'http://petcare.somee.com/api/chuyenmuc/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.chuyenMucListProperty = res.data;
        });
    }
}
