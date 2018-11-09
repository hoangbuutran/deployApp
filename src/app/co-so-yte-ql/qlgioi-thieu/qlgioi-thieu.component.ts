import { Component, OnInit } from '@angular/core';
import { GioiThieuService } from '../../shared/Service/GioiThieu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../../shared/Service/session.service';
import { ToastrService } from 'ngx-toastr';
import { CoSoThuYService } from '../../shared/Service/CoSoThuY.service';

@Component({
  selector: 'app-qlgioi-thieu',
  templateUrl: './qlgioi-thieu.component.html',
  styleUrls: ['./qlgioi-thieu.component.css']
})
export class QlgioiThieuComponent implements OnInit {
  GioiThieuForm: FormGroup;
  sessionuser: any;

  constructor(
    private gioiThieuService: GioiThieuService,
    private fb: FormBuilder,
    private sessionService: SessionService,
    private toastr: ToastrService,
    private coSoThuYService: CoSoThuYService,
  ) { }

  ngOnInit() {
    this.GioiThieuForm = this.fb.group({
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      IdGioiThieu: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.sessionuser = this.sessionService.getToken();
    this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.gioiThieuService.viewgioiThieuVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
        this.GioiThieuForm.get('NoiDung').patchValue(res1.data.NoiDung);
        this.GioiThieuForm.get('IdCoSoThuY').patchValue(res1.data.IdCoSoThuY);
        this.GioiThieuForm.get('IdGioiThieu').patchValue(res1.data.IdGioiThieu);
      });
    });
  }


  gioiThieuSubmitForm() {
    this.gioiThieuService.Update(this.GioiThieuForm.value).subscribe(res => {
      this.toastr.success(res.message, 'Thông báo');
    });
  }

  XemThongTinGiongThuCung() {
    this.gioiThieuService.gioiThieuVoiCSYT();
  }

}
