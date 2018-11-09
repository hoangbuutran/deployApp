import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaiKhoanService } from '../shared/Service/TaiKhoan.service';
import { SessionService } from '../shared/Service/session.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sessionuser: any;
  tenAmin;
  constructor(
    private route: Router,
    private sessionService: SessionService,
    private taiKhoanService: TaiKhoanService,
  ) { }

  ngOnInit() {
    this.adminIdTaiKhoan();
  }
  adminIdTaiKhoan() {
    this.sessionuser = this.sessionService.getToken();
    this.taiKhoanService.view(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.tenAmin = res.data.UserName;
    });
  }
  LogOut() {
    sessionStorage.removeItem('session');
    this.route.navigate(['/login']);
  }
}
