import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CoSoThuYService } from '../../shared/Service/CoSoThuY.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-profile-csty',
  templateUrl: './change-profile-csty.component.html',
  styleUrls: ['./change-profile-csty.component.css']
})
export class ChangeProfileCstyComponent implements OnInit {
  id: any;
  CoSoThuYEditProfileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private CoSoThuYService: CoSoThuYService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    this.CoSoThuYEditProfileForm = this.fb.group({
      IdCoSoThuY: [''],
      TenCoSoThuY: ['', Validators.required],
      DiaDiem: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      IdTaiKhoan: [''],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.CoSoThuYService.view(this.id).subscribe(res => {
      this.CoSoThuYEditProfileForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.CoSoThuYEditProfileForm.get('TenCoSoThuY').patchValue(res.data.TenCoSoThuY);
      this.CoSoThuYEditProfileForm.get('DiaDiem').patchValue(res.data.DiaDiem);
      this.CoSoThuYEditProfileForm.get('SDT').patchValue(res.data.SDT);
      this.CoSoThuYEditProfileForm.get('Email').patchValue(res.data.Email);
      this.CoSoThuYEditProfileForm.get('IdTaiKhoan').patchValue(res.data.IdTaiKhoan);
      this.CoSoThuYEditProfileForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }

  CoSoThuYEditProfileSubmitForm() {
    this.CoSoThuYService.Update(this.CoSoThuYEditProfileForm.value)
      .subscribe(data => {
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/cosoyteql/home']);
  }
}
