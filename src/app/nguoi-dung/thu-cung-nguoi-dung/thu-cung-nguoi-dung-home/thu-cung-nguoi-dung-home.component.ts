import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../shared/Service/UploadFile.service';
import { FileUpload } from '../../../shared/Model/FileUpload.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThuCungService } from '../../../shared/Service/ThuCung.service';
import { SessionService } from '../../../shared/Service/session.service';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { GiongThuCungService } from '../../../shared/Service/GiongThuCung.service';
import { TinhTrangService } from '../../../shared/Service/TinhTrang.service';
import { CanNangService } from '../../../shared/Service/CanNang.service';
import { LichSuKhamService } from '../../../shared/Service/LichSuKham.service';

@Component({
  selector: 'app-thu-cung-nguoi-dung-home',
  templateUrl: './thu-cung-nguoi-dung-home.component.html',
  styleUrls: ['./thu-cung-nguoi-dung-home.component.css']
})
export class ThuCungNguoiDungHomeComponent implements OnInit {

  canNangEditForm: FormGroup;
  tinhTrangEditForm: FormGroup;
  thuCungEditForm: FormGroup;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  downloadURLLocal: any;

  tinhTrangAddForm: FormGroup;
  canNangAddForm: FormGroup;
  thuCungAddForm: FormGroup;
  sessionuser: any;
  trangThaiList = [
    { id: true, name: 'public' },
    { id: false, name: 'private' },
  ];

  listGiongThuCung: any[];

  tenThuongGoiDetail: any;
  ngayNuoiDetail: any;
  giongThuCungDetail: any;
  trangThaiDetail: any;
  lichSuKhamDetail: any[];

  idNguoiDung: any;
  idThuCung: any;

  tinhTrangBenh:any;
  ngayTham:any;
  loiNhan:any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private uploadService: UploadFileService,
    private thuCungService: ThuCungService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
    private giongThuCungService: GiongThuCungService,
    private tinhTrangService: TinhTrangService,
    private canNangService: CanNangService,
    private lichSuKhamService: LichSuKhamService
  ) { }

  ngOnInit() {


    this.thuCungAddForm = this.fb.group({
      TenThuongGoi: ['', Validators.required],
      NgayNuoi: ['', Validators.required],
      IdGiongThuCung: ['', Validators.required],
      IdNguoiDung: [''],
      TrangThai: ['', Validators.required],
    });

    this.thuCungEditForm = this.fb.group({
      TenThuongGoi: ['', Validators.required],
      NgayNuoi: ['', Validators.required],
      IdGiongThuCung: ['', Validators.required],
      IdNguoiDung: [''],
      TrangThai: ['', Validators.required],
    });

    this.tinhTrangAddForm = this.fb.group({
      NoiDungTinhTrang: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      LinkVideo: ['', Validators.required],
      IdThuCung: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });

    this.tinhTrangEditForm = this.fb.group({
      NoiDungTinhTrang: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      LinkVideo: ['', Validators.required],
      IdThuCung: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });

    this.canNangAddForm = this.fb.group({
      CanNang1: ['', Validators.required],
      IdThuCung: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });

    this.canNangEditForm = this.fb.group({
      CanNang1: ['', Validators.required],
      IdThuCung: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });

    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.thuCungService.viewthuCungVoiIdNguoiDung(res.data.IdNguoiDung);
      this.idNguoiDung = res.data.IdNguoiDung;
      this.thuCungAddForm.get('IdNguoiDung').patchValue(this.idNguoiDung);
      this.thuCungEditForm.get('IdNguoiDung').patchValue(this.idNguoiDung);
    });

    this.giongThuCungService.giongThuCungList();// giongThuCungListProperty

  }

  viewThuCung(IdThuCung) {
    this.thuCungService.view(IdThuCung).subscribe(res => {
      this.tenThuongGoiDetail = res.data.TenThuongGoi;
      this.ngayNuoiDetail = res.data.NgayNuoi;
      this.idThuCung = res.data.IdThuCung;
      this.trangThaiDetail = res.data.TrangThai;
      this.giongThuCungService.view(res.data.IdGiongThuCung).subscribe(res => {
        this.giongThuCungDetail = res.data.TenGiongThuCung;
      });
      this.tinhTrangService.viewtinhTrangVoiIdThuCung(IdThuCung);// listtinhTrangWithIdThuCung
      this.canNangService.viewcanNangVoiIdThuCung(IdThuCung);// listcanNangWithIdThuCung
      this.lichSuKhamService.getAllWithIdThuCung(IdThuCung).subscribe(res => {
        this.lichSuKhamDetail = res.data;
      });
    });
  }

  editThuCung() {
    this.thuCungService.view(this.idThuCung).subscribe(res => {
      this.thuCungEditForm.get('TenThuongGoi').patchValue(res.data.TenThuongGoi);
      this.thuCungEditForm.get('IdGiongThuCung').patchValue(res.data.IdGiongThuCung);
      this.thuCungEditForm.get('TrangThai').patchValue(res.data.TrangThai);
      this.thuCungEditForm.get('NgayNuoi').patchValue(res.data.NgayNuoi);
    });
  }

  tinhTrangEditSubmitForm(IdThuCung) { }

  tinhTrangAddSubmitForm(IdThuCung) { }

  thuCungAddSubmitForm() {
    console.log(this.thuCungAddForm.value);
  }

  thuCungEditSubmitForm(IdThuCung) {

  }

  xemLichSuKham(idLichSuKham) {
    this.lichSuKhamService.view(idLichSuKham).subscribe(res => {
      this.tinhTrangBenh = res.data.TinhTrangBenh;
      this.ngayTham = res.data.NgayThang;
      this.loiNhan = res.data.LoiNhan;
    });
  }

}
