import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BaiVietService } from '../../../shared/Service/BaiViet.service';
import { BinhLuanService } from '../../../shared/Service/BinhLuan.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-bai-viet-detail-profile',
  templateUrl: './bai-viet-detail-profile.component.html',
  styleUrls: ['./bai-viet-detail-profile.component.css']
})
export class BaiVietDetailProfileComponent implements OnInit {

  idBaiViet = '';
  TenNguoiDungDetail: any;
  TenChuyenMucDetail: any;
  NgayDangDetail: any;
  TieuDeDetail: any;
  NoiDungDetail: any;
  SoLikeDetail: any;
  SoCmtDetail: any;
  BinhLuansDetail: any[];
  IdNguoiDungDetail: any;

  binhLuanAddForm: FormGroup;
  sessionuser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private baiVietService: BaiVietService,
    private binhLuanService: BinhLuanService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idBaiViet = params.get('IdBaiViet');
    });

    this.binhLuanAddForm = this.fb.group({
      NoiDung: ['', Validators.required],
      IdBaiViet: ['', Validators.required],
      IdNguoiDung: ['', Validators.required],
    });

    this.binhLuanAddForm.get('IdBaiViet').patchValue(this.idBaiViet);

    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.binhLuanAddForm.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
    });

    this.baiVietService.view(this.idBaiViet).subscribe(res => {
      this.TenNguoiDungDetail = res.data.NguoiDung.TenNguoiDung;
      this.TenChuyenMucDetail = res.data.ChuyenMuc.TenChuyenMuc;
      this.NgayDangDetail = res.data.NgayDang;
      this.TieuDeDetail = res.data.TieuDe;
      this.NoiDungDetail = res.data.NoiDung;
      this.SoLikeDetail = res.data.SoLike;
      this.SoCmtDetail = res.data.SoCmt;
      this.IdNguoiDungDetail = res.data.IdNguoiDung;
      this.binhLuanService.viewBinhLuanVoiIdBaiViet(this.idBaiViet);//listbinhLuanWithIdBaiViet
    });
  }

  binhLuanSubmitForm() {
    this.binhLuanService.create(this.binhLuanAddForm.value).subscribe(res => {
      this.binhLuanService.viewBinhLuanVoiIdBaiViet(this.idBaiViet);//listbinhLuanWithIdBaiViet
    });
  }

}
