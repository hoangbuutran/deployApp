import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { ToastrService } from 'ngx-toastr';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';

@Component({
  selector: 'app-nguoi-dung-profile-edit',
  templateUrl: './nguoi-dung-profile-edit.component.html',
  styleUrls: ['./nguoi-dung-profile-edit.component.css']
})
export class NguoiDungProfileEditComponent implements OnInit {
  id: any;
  NguoiDungEditProfileForm: FormGroup;
  listCSTY: any[];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private NguoiDungService: NguoiDungService,
    private router: Router,
    private toastr: ToastrService,
    private cstyService: CoSoThuYService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdNguoiDung');
    });
    this.NguoiDungEditProfileForm = this.fb.group({
      IdNguoiDung: [''],
      TenNguoiDung: ['', Validators.required],
      DiaChi: ['', Validators.required],
      NgaySinh: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      IdTaiKhoan: [''],
      TrangThai: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.NguoiDungService.view(this.id).subscribe(res => {
      this.NguoiDungEditProfileForm.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
      this.NguoiDungEditProfileForm.get('TenNguoiDung').patchValue(res.data.TenNguoiDung);
      this.NguoiDungEditProfileForm.get('DiaChi').patchValue(res.data.DiaChi);
      this.NguoiDungEditProfileForm.get('HinhAnh').patchValue(res.data.HinhAnh);
      this.NguoiDungEditProfileForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.NguoiDungEditProfileForm.get('SDT').patchValue(res.data.SDT);
      this.NguoiDungEditProfileForm.get('NgaySinh').patchValue(res.data.NgaySinh);
      this.NguoiDungEditProfileForm.get('Email').patchValue(res.data.Email);
      this.NguoiDungEditProfileForm.get('IdTaiKhoan').patchValue(res.data.IdTaiKhoan);
      this.NguoiDungEditProfileForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
    this.cstyService.coSoThuYListForNguoiDung().subscribe(res => {
      this.listCSTY = res.data;
    });
  }

  NguoiDungEditProfileSubmitForm() {
    this.NguoiDungService.Update(this.NguoiDungEditProfileForm.value)
      .subscribe(data => {
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/nguoidung/nguoidungprofile/home/' + this.id]);
  }
}
