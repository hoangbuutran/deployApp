import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaiKhoanService } from '../shared/Service/TaiKhoan.service';
import { Router } from '@angular/router';
import { SessionService } from '../shared/Service/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  errorMessenger: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taiKhoanService: TaiKhoanService,
    private sessionService: SessionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      UserName: ['', Validators.required],
      Pass: ['', Validators.required],
    });
  }

  RegisterSubmitForm() {
    this.taiKhoanService.Register(this.RegisterForm.value).subscribe(res => {
      this.toastr.success(res.message, 'Thông báo');
      this.router.navigate(['/login']);
    });
  }

}
