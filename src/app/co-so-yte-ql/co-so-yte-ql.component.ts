import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/Service/session.service';
import { NguoiDungService } from '../shared/Service/NguoiDungService';
import { CoSoThuYService } from '../shared/Service/CoSoThuY.service';

@Component({
  selector: 'app-co-so-yte-ql',
  templateUrl: './co-so-yte-ql.component.html',
  styleUrls: ['./co-so-yte-ql.component.css']
})
export class CoSoYteQlComponent implements OnInit {
  sessionuser: any;
  tenCSYT;
  IdCSTY: any;
  constructor(
    private route: Router,
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.coSoThuYIdTaiKhoan();
  }

  coSoThuYIdTaiKhoan() {
    this.sessionuser = this.sessionService.getToken();
    this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.tenCSYT = res.data.TenCoSoThuY;
      this.IdCSTY = res.data.IdCoSoThuY;
    });
  }
  
  LogOut() {
    sessionStorage.removeItem('session');
    this.route.navigate(['/login']);
  }
}
