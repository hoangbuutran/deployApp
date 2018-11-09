import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SucKhoeThuCungService } from '../../../../shared/Service/SucKhoeThuCung.service';

@Component({
  selector: 'app-suc-khoe-thu-cung-list',
  templateUrl: './suc-khoe-thu-cung-list.component.html',
  styleUrls: ['./suc-khoe-thu-cung-list.component.css']
})
export class SucKhoeThuCungListComponent implements OnInit {


  idSKTC: any;

  TenSKTCDetail: any;
  MoTaSKTCDetail: any;
  NoiDungDetail: any;
  IdCoSoThuYDetail: any;
  ImageShowDetail: any;
  NgayThangDetail: any;
  constructor(
    private route: ActivatedRoute,
    private sucKhoeThuCungService: SucKhoeThuCungService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idSKTC = params.get('IdSKTC');
    });
    this.sucKhoeThuCungService.view(this.idSKTC).subscribe(res => {
      this.TenSKTCDetail = res.data.TenSKTC;
      this.MoTaSKTCDetail = res.data.MoTa;
      this.NoiDungDetail = res.data.NoiDung;
      this.IdCoSoThuYDetail = res.data.IdCoSoThuY;
      this.ImageShowDetail = 'http://localhost:1650/Images/' + res.data.ImageShow;
      this.NgayThangDetail = res.data.NgayThang;
    });
  }

}
