import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ThuCungService } from '../../../shared/Service/ThuCung.service';
import { CanNangService } from '../../../shared/Service/CanNang.service';
import { TinhTrangService } from '../../../shared/Service/TinhTrang.service';
import { ThuCungModel } from '../../../shared/Model/ThuCung.model';
import { LichSuKhamService } from '../../../shared/Service/LichSuKham.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PhieuHenKhamService } from '../../../shared/Service/PhieuHenKham.service';

@Component({
  selector: 'app-thu-cung-detail-with-khach-hang',
  templateUrl: './thu-cung-detail-with-khach-hang.component.html',
  styleUrls: ['./thu-cung-detail-with-khach-hang.component.css']
})
export class ThuCungDetailWithKhachHangComponent implements OnInit {
  id = '';
  TenThuongGoiDetail;
  NgayNuoiDetail;
  TenGiongThuCungDetail;

  tinhTrangBenh: any;
  ngayTham: any;
  loiNhan: any;

  lichSuKhamAddForm: FormGroup;
  lichSuKhamDetail: any[];

  hinhAnhDetail;
  noiDungTinhTrangDetail;
  constructor(
    private route: ActivatedRoute,
    private thuCungService: ThuCungService,
    private canNangService: CanNangService,
    private tinhTrangService: TinhTrangService,
    private lichSuKhamService: LichSuKhamService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdThuCung');
    });
    this.canNangService.viewcanNangVoiIdThuCung(this.id);
    this.tinhTrangService.viewtinhTrangVoiIdThuCung(this.id);
    this.thuCungService.view(this.id).subscribe(res => {
      this.TenThuongGoiDetail = res.data.TenThuongGoi;
      this.NgayNuoiDetail = res.data.NgayNuoi;
      this.TenGiongThuCungDetail = res.data.GiongThuCung.TenGiongThuCung;
    });
    this.lichSuKhamService.getAllWithIdThuCung(this.id).subscribe(
      res => {
        this.lichSuKhamDetail = res.data;
      }
    );

    this.lichSuKhamAddForm = this.fb.group({
      IdThuCung: ['', Validators.required],
      LoiNhan: ['', Validators.required],
      TinhTrangBenh: ['', Validators.required],
    });
    this.lichSuKhamAddForm.get('IdThuCung').patchValue(this.id);
  }

  XemThongTinTinhTrang(IdTinhTrang: number) {
    this.tinhTrangService.view(IdTinhTrang).subscribe(res => {
      this.hinhAnhDetail = 'http://takecareofpets.somee.com/Images/' + res.data.HinhAnh;
      this.noiDungTinhTrangDetail = res.data.NoiDungTinhTrang;
    });
  }

  lichSuKhamAddSubmitForm() {
    this.lichSuKhamService.create(this.lichSuKhamAddForm.value).subscribe(res => {
      this.lichSuKhamService.getAllWithIdThuCung(this.id).subscribe(
        res1 => {
          this.lichSuKhamDetail = res1.data;
        }
      );
    });
  }

  xemLichSuKham(idLichSuKham) {
    this.lichSuKhamService.view(idLichSuKham).subscribe(res => {
      this.tinhTrangBenh = res.data.TinhTrangBenh;
      this.ngayTham = res.data.NgayThang;
      this.loiNhan = res.data.LoiNhan;
    });
  }

}
