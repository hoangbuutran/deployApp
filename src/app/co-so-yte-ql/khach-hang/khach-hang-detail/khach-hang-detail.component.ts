import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { ThuCungModel } from '../../../shared/Model/Thucung.model';
import { ThuCungService } from '../../../shared/Service/ThuCung.service';

@Component({
  selector: 'app-khach-hang-detail',
  templateUrl: './khach-hang-detail.component.html',
  styleUrls: ['./khach-hang-detail.component.css']
})
export class KhachHangDetailComponent implements OnInit {

  id = '';

  IdNguoiDungDetail: number;
  TenNguoiDungDetail: string;
  DiaChiDetail: string;
  NgaySinhDetail: string;
  SDTDetail: string;
  EmailDetail: string;
  TrangThaiDetail: boolean;
  HinhAnhDetail: string;
  IdCoSoThuYDetail: number;

  constructor(
    private route: ActivatedRoute,
    private nguoiDungService: NguoiDungService,
    private thuCungService: ThuCungService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdNguoiDung');
    });
    this.nguoiDungService.view(this.id).subscribe(res => {
      this.IdNguoiDungDetail = res.data.IdNguoiDung;
      this.TenNguoiDungDetail = res.data.TenNguoiDung;
      this.DiaChiDetail = res.data.DiaChi;
      this.NgaySinhDetail = res.data.NgaySinh;
      this.SDTDetail = res.data.SDT;
      this.EmailDetail = res.data.Email;
      this.HinhAnhDetail = 'http://takecareofpets.somee.com/Images/' + res.data.HinhAnh;
    });
    this.thuCungService.viewthuCungVoiIdNguoiDung(this.id);
  }

}
