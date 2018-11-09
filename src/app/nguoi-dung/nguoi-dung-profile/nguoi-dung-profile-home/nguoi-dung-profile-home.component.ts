import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { BaiVietService } from '../../../shared/Service/BaiViet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { SessionService } from '../../../shared/Service/session.service';
import { BinhLuanService } from '../../../shared/Service/BinhLuan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nguoi-dung-profile-home',
  templateUrl: './nguoi-dung-profile-home.component.html',
  styleUrls: ['./nguoi-dung-profile-home.component.css']
})
export class NguoiDungProfileHomeComponent implements OnInit {

  idNguoiDung = '';
  listBaiDangNguoiDung: any[];
  binhLuanAdd2Form: FormGroup;
  sessionuser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private baiVietService: BaiVietService,
    private binhLuanService: BinhLuanService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idNguoiDung = params.get('IdNguoiDung');
    });

    this.binhLuanAdd2Form = this.fb.group({
      NoiDung: ['', Validators.required],
      IdBaiViet: ['', Validators.required],
      IdNguoiDung: ['', Validators.required],
    });

    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.binhLuanAdd2Form.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
    });

    this.baiVietService.viewbaiVietVoiIdNguoiDung(this.idNguoiDung); //listBaiVietWithIdNguoiDung
  }

  binhLuanSubmitForm(idBaiViet: number | string) {
    this.binhLuanAdd2Form.value.IdBaiViet = idBaiViet;
    this.binhLuanService.create(this.binhLuanAdd2Form.value).subscribe(res => {
      this.toastr.success(res.message,'thông báo');
    });
  }
}
