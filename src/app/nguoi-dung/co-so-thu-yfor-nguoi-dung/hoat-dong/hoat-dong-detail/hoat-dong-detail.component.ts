import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HoatDongService } from '../../../../shared/Service/HoatDong.service';

@Component({
  selector: 'app-hoat-dong-detail',
  templateUrl: './hoat-dong-detail.component.html',
  styleUrls: ['./hoat-dong-detail.component.css']
})
export class HoatDongDetailComponent implements OnInit {

  idHoatDong: any;

  TenHoatDongDetail: any;
  MoTaHoatDongDetail: any;
  NoiDungDetail: any;
  IdCoSoThuYDetail: any;
  ImageShowDetail: any;
  NgayThangDetail: any;
  constructor(
    private route: ActivatedRoute,
    private hoatDongService: HoatDongService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idHoatDong = params.get('IdHoatDong');
    });
    this.hoatDongService.view(this.idHoatDong).subscribe(res => {
      this.TenHoatDongDetail = res.data.TenHoatDong;
      this.MoTaHoatDongDetail = res.data.MoTa;
      this.NoiDungDetail = res.data.NoiDung;
      this.IdCoSoThuYDetail = res.data.IdCoSoThuY;
      this.ImageShowDetail = 'http://localhost:1650/Images/' + res.data.ImageShow;
      this.NgayThangDetail = res.data.NgayThang;
    });
  }

}
