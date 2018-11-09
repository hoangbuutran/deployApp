import { Component, OnInit } from '@angular/core';
import { DichVuService } from '../../../shared/Service/DichVu.service';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { PhieuHenKhamService } from '../../../shared/Service/PhieuHenKham.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SessionService } from '../../../shared/Service/session.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dat-lich-kham',
  templateUrl: './dat-lich-kham.component.html',
  styleUrls: ['./dat-lich-kham.component.css']
})
export class DatLichKhamComponent implements OnInit {
  idCoSoThuY: any;
  listDichVu: any[];
  sessionuser: any;

  tenNguoiDungDetail: any;
  diaChiDetail: any;
  soDienThoai: any;
  idNguoiDung: any;

  datLichKhamForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dichVuService: DichVuService,
    private nguoiDungService: NguoiDungService,
    private phieuHenKhamService: PhieuHenKhamService,
    private sessionService: SessionService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCoSoThuY = params.get('IdCoSoThuY');
    });

    this.datLichKhamForm = this.fb.group({
      IdNguoiDung: ['', Validators.required],
      NgayHenKham: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      GioHenKham: ['', Validators.required],
      LyDoHenKham: ['', Validators.required],
      IdDichVu: ['', Validators.required],
    });

    this.dichVuService.viewDichVuForTrueVoiCSYT(this.idCoSoThuY).subscribe(res => {
      this.listDichVu = res.data;
    });

    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.tenNguoiDungDetail = res.data.TenNguoiDung;
      this.diaChiDetail = res.data.DiaChi;
      this.soDienThoai = res.data.SDT;
      this.idNguoiDung = res.data.IdNguoiDung;
      this.datLichKhamForm.get('IdNguoiDung').patchValue(res.data.IdNguoiDung);
      this.datLichKhamForm.get('IdCoSoThuY').patchValue(this.idCoSoThuY);
    });
  }
  datLichKhamSubmitForm() {
    this.phieuHenKhamService.create(this.datLichKhamForm.value).subscribe(res => {
      this.toastr.success(res.message, 'Thông báo');
    });
    this.router.navigate(['/nguoidung/inforcosothuy/' + this.idCoSoThuY + '/home/' + this.idCoSoThuY]);
  }
}
