import { Component, OnInit } from '@angular/core';
import { TaiKhoanService } from '../shared/Service/TaiKhoan.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  ForgotPassForm: FormGroup;

  constructor(
    private taiKhoanService: TaiKhoanService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ForgotPassForm = this.fb.group({
      Email: ['', Validators.required],
    });
  }
  ForgotPassSubmitForm() {
    this.taiKhoanService.ForgotPass(this.ForgotPassForm.value).subscribe(res => {
      this.toastr.success(res.message + ' vào email của bạn', 'Thông báo');
      this.router.navigate(['/login']);
    });
  }
}
