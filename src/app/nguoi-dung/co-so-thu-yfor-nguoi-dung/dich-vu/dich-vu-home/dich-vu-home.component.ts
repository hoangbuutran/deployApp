import { Component, OnInit, ViewChild } from '@angular/core';
import { DichVuService } from '../../../../shared/Service/DichVu.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoSoThuYforNguoiDungComponent } from '../../co-so-thu-yfor-nguoi-dung.component';

@Component({
  selector: 'app-dich-vu-home',
  templateUrl: './dich-vu-home.component.html',
  styleUrls: ['./dich-vu-home.component.css']
})
export class DichVuHomeComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute,
    private dichVuService: DichVuService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    this.dichVuService.dichVuForTrueListVoiCSYT(this.id);
  }

}
