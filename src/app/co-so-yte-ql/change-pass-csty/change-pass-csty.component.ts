import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TaiKhoanService } from '../../shared/Service/TaiKhoan.service';
import { SessionService } from '../../shared/Service/session.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass-csty',
  templateUrl: './change-pass-csty.component.html',
  styleUrls: ['./change-pass-csty.component.css']
})
export class ChangePassCstyComponent implements OnInit {

  ChangePassForm: FormGroup;
  PassNewLan2: any;
  sessionuser: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private taiKhoanService: TaiKhoanService,
  ) { }

  ngOnInit() {
    this.ChangePassForm = this.fb.group({
      UserName: ['', Validators.required],
      PassOld: ['', Validators.required],
      PassNew: ['', Validators.required],
    });
    this.sessionuser = this.sessionService.getToken();
  }

  ChangePassSubmitForm() {
    if (this.ChangePassForm.value.UserName === this.sessionuser.UserName) {
      if (this.ChangePassForm.value.PassOld === this.sessionuser.Pass) {
        this.taiKhoanService.ChangePass(this.ChangePassForm.value).subscribe(res => {
          sessionStorage.removeItem('session');
          this.sessionService.saveSession(res.data);
          this.toastr.success(res.message, 'Thông báo');
        });
        this.router.navigate(['/cosoyteql/home']);
      } else {
        alert('Mật khẩu củ không đúng');
      }
    } else {
      alert('Tên đăng nhập không đúng');
    }
  }

}
