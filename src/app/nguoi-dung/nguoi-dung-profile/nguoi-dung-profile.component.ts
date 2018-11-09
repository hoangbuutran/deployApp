import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';
import { SessionService } from '../../shared/Service/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nguoi-dung-profile',
  templateUrl: './nguoi-dung-profile.component.html',
  styleUrls: ['./nguoi-dung-profile.component.css']
})
export class NguoiDungProfileComponent implements OnInit {
  
  idNguoiDung: any;
  sessionuser: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
  ) { }

  ngOnInit() {
    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idNguoiDung = res.data.IdNguoiDung;
    });
  }
}
