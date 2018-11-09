import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ErrorModel } from '../Model/error.model';

@Injectable()

export class ErrorService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient
    ) { }
    errorListProperty: ErrorModel[];

    url: string;


    view(errorId: number | string): Observable<any> {
        this.url = 'http://petcare.somee.com/api/error/getbyid/' + errorId;
        return this.apiService.get(this.url);
    }

    errorList() {
        this.url = 'http://petcare.somee.com/api/error/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.errorListProperty = res.data;
        });
    }
}
