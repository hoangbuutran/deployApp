import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FileUpload } from '../Model/FileUpload.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SessionService } from './session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaiVietService } from './BaiViet.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UploadFileService {

    private basePath = '/uploads';
    imageUrl;
    trangthai = false;
    url: string;
    constructor(
        private db: AngularFireDatabase,
        private http: HttpClient,
        private baiVietService: BaiVietService,
        private toastr: ToastrService
    ) { }

    pushFileToStorage(baiViet: any, fileUpload: FileUpload, progress: { percentage: number }) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // in progress
                const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
                // fail
                console.log(error);
            },
            () => {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    this.imageUrl = downloadURL;
                    baiViet.HinhAnh = this.imageUrl;
                    this.baiVietService.create(baiViet).subscribe(
                        res => {
                            this.toastr.success(res.message, 'Thông báo');
                        }
                    );
                });
            }
        );
    }

    getFileUploads(numberItems): AngularFireList<FileUpload> {
        return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
    }
}
