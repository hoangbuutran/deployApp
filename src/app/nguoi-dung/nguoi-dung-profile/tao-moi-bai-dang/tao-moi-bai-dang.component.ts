import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../shared/Model/FileUpload.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UploadFileService } from '../../../shared/Service/UploadFile.service';
import { BaiVietService } from '../../../shared/Service/BaiViet.service';
import { SessionService } from '../../../shared/Service/session.service';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { ChuyenMucService } from '../../../shared/Service/ChuyenMuc.service';

@Component({
  selector: 'app-tao-moi-bai-dang',
  templateUrl: './tao-moi-bai-dang.component.html',
  styleUrls: ['./tao-moi-bai-dang.component.css']
})
export class TaoMoiBaiDangComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  downloadURLLocal: any;
  BaiVietAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'public' },
    { id: false, name: 'private' },
  ];

  idNguoiDung: any;
  sessionuser: any;

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;
  file;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private uploadService: UploadFileService,
    private baiVietService: BaiVietService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
    private chuyenMucService: ChuyenMucService
  ) { }

  ngOnInit() {
    this.BaiVietAddForm = this.fb.group({
      TieuDe: ['', Validators.required],
      NoiDung: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      IdChuyenMuc: ['', Validators.required],
      IdNguoiDung: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idNguoiDung = res.data.IdNguoiDung;
      this.BaiVietAddForm.get('IdNguoiDung').patchValue(this.idNguoiDung);
    });
    this.chuyenMucService.chuyenMucList();// chuyenMucListProperty
  }

  selectFile(event, file2: FileList) {
    // dua anh ra man hinh
    this.fileToUpload = file2.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    // post
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.BaiVietAddForm.value, this.currentFileUpload, this.progress);
  }

  baiVietAddSubmitForm() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.BaiVietAddForm.value, this.currentFileUpload, this.progress);
  }
}
