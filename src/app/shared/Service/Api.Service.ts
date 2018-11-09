import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SessionService } from './session.service';

@Injectable()

export class ApiService {
    constructor(
        private http: Http,
        private sessionService: SessionService,
        private router: Router,
    ) { }

    get(path: string): Observable<any> {
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(path)
            .map((response) => response.json());
    }

    put(path: string, body: Object = {}): Observable<any> {
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put(path, JSON.stringify(body), requestOptions)
            .map((response) => response.json());
    }

    post(path: string, body: Object = {}): Observable<any> {
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(path, JSON.stringify(body), requestOptions)
            .map((response) => response.json());
    }

    delete(path): Observable<any> {
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete(path)
            .map((response) => response.json());
    }
}
