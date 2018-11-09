import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DichVuService } from '../../../shared/Service/DichVu.service';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qldich-vu-add',
  templateUrl: './qldich-vu-add.component.html',
  styleUrls: ['./qldich-vu-add.component.css']
})
export class QldichVuAddComponent implements OnInit {

  dichVuAddForm: FormGroup;
  sessionuser: any;
  tinhTrangList = [
    { id: true, name: 'Mở dịch vụ' },
    { id: false, name: 'Khóa dịch vụ' },
  ];

  constructor(
    private fb: FormBuilder,
    private dichVuService: DichVuService,
    private router: Router,
    private toastr: ToastrService,
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.dichVuAddForm = this.fb.group({
      TenDichVu: ['', Validators.required],
      MoTaDichVu: ['', Validators.required],
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      TinhTrang: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.sessionuser = this.sessionService.getToken();
    this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.dichVuAddForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
    });
  }

  dichVuAddSubmitForm() {
    this.dichVuService.create(this.dichVuAddForm.value)
      .subscribe(data => {
        this.dichVuService.dichVuListVoiCSYT();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/cosoyteql/qldichvu/list']);
  }

}
