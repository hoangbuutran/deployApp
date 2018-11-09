import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DichVuService } from '../../../../shared/Service/DichVu.service';

@Component({
  selector: 'app-dich-vu-detail',
  templateUrl: './dich-vu-detail.component.html',
  styleUrls: ['./dich-vu-detail.component.css']
})
export class DichVuDetailComponent implements OnInit {

  idDichVu: any;

  TenDichVuDetail: any;
  MoTaDichVuDetail: any;
  NoiDungDetail: any;
  IdCoSoThuYDetail: any;
  constructor(
    private route: ActivatedRoute,
    private dichVuService: DichVuService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idDichVu = params.get('IdDichVu');
    });
    this.dichVuService.view(this.idDichVu).subscribe(res => {
      this.TenDichVuDetail = res.data.TenDichVu;
      this.MoTaDichVuDetail = res.data.MoTaDichVu;
      this.NoiDungDetail = res.data.NoiDung;
      this.IdCoSoThuYDetail = res.data.IdCoSoThuY;
    });
  }
}
