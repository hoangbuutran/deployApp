import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SessionService } from '../../shared/Service/session.service';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BinhLuanService } from '../../shared/Service/BinhLuan.service';
import { BaiVietService } from '../../shared/Service/BaiViet.service';

@Component({
  selector: 'app-home-nguoi-dung',
  templateUrl: './home-nguoi-dung.component.html',
  styleUrls: ['./home-nguoi-dung.component.css']
})
export class HomeNguoiDungComponent implements OnInit {
  idNguoiDung = '';
  listBaiDangNguoiDung: any[];
  binhLuanAddForm: FormGroup;
  likeForm: FormGroup;
  sessionuser: any;

  idBaiVietDetail: any;
  TenNguoiDungDetail: any;
  TenChuyenMucDetail: any;
  NgayDangDetail: any;
  TieuDeDetail: any;
  HinhAnhDetail: any;
  NoiDungDetail: any;
  SoLikeDetail: any;
  SoCmtDetail: any;
  BinhLuansDetail: any[];
  IdNguoiDungDetail: any;

  imageDaiDien: any;

  listLike: any[];

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

    this.binhLuanAddForm = this.fb.group({
      NoiDung: ['', Validators.required],
      IdBaiViet: ['', Validators.required],
      IdNguoiDung: ['', Validators.required],
    });

    this.likeForm = this.fb.group({
      IdBaiViet: ['', Validators.required],
      IdNguoiDung: ['', Validators.required],
    });

    this.sessionuser = this.sessionService.getToken();
    
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idNguoiDung = res.data.IdNguoiDung;
      this.imageDaiDien = 'http://petcare.somee.com/Images/' + res.data.HinhAnh;
      this.binhLuanAddForm.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
      this.likeForm.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
    });

    this.baiVietService.viewListBaiViet();//listBaiViet
  }

  binhLuanSubmitForm(idBaiViet: number | string) {
    this.binhLuanAddForm.value.IdBaiViet = idBaiViet;
    this.binhLuanService.create(this.binhLuanAddForm.value).subscribe(res => {
      this.toastr.success(res.message, 'thông báo');
    });
  }

  xemBaiViet(idBaiViet) {
    this.binhLuanAddForm.get('IdBaiViet').patchValue(idBaiViet);
    this.idBaiVietDetail = idBaiViet;
    this.baiVietService.view(idBaiViet).subscribe(res => {
      this.TenNguoiDungDetail = res.data.NguoiDung.TenNguoiDung;
      this.TenChuyenMucDetail = res.data.ChuyenMuc.TenChuyenMuc;
      this.NgayDangDetail = res.data.NgayDang;
      this.TieuDeDetail = res.data.TieuDe;
      this.HinhAnhDetail = res.data.HinhAnh;
      this.NoiDungDetail = res.data.NoiDung;
      this.SoLikeDetail = res.data.SoLike;
      this.SoCmtDetail = res.data.SoCmt;
      this.IdNguoiDungDetail = res.data.IdNguoiDung;
      this.binhLuanService.viewBinhLuanVoiIdBaiViet(idBaiViet);//listbinhLuanWithIdBaiViet
    });
  }

  likeUnLike(idBaiViet) {
    this.likeForm.value.IdBaiViet = idBaiViet;
    this.baiVietService.like(this.likeForm.value).subscribe(res => {
      this.binhLuanService.viewBinhLuanVoiIdBaiViet(idBaiViet);//listbinhLuanWithIdBaiViet
      this.baiVietService.viewListBaiViet();//listBaiViet
      this.xemBaiViet(idBaiViet);
    });
  }

  showLike(idBaiViet){
      this.baiVietService.listLike(idBaiViet).subscribe(res => {
        this.listLike = res.data;
      });
  }

}
