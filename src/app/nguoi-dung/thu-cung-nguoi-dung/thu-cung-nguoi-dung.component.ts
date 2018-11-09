import { Component, OnInit } from '@angular/core';
import { CoSoThuYService } from '../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../shared/Service/session.service';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';

@Component({
  selector: 'app-thu-cung-nguoi-dung',
  templateUrl: './thu-cung-nguoi-dung.component.html',
  styleUrls: ['./thu-cung-nguoi-dung.component.css']
})
export class ThuCungNguoiDungComponent implements OnInit {

  listCoSoThuY: any[];
  sessionuser: any;
  idCoSoThuCung: any;
  constructor(
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
  ) { }

  ngOnInit() {
    this.coSoThuYService.coSoThuYListForNguoiDung().subscribe(res => {
      this.listCoSoThuY = res.data;
    });
    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idCoSoThuCung = res.data.IdCoSoThuY;
    });
  }

}
