import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HoatDongService } from '../../../../shared/Service/HoatDong.service';

@Component({
  selector: 'app-hoat-dong-home',
  templateUrl: './hoat-dong-home.component.html',
  styleUrls: ['./hoat-dong-home.component.css']
})
export class HoatDongHomeComponent implements OnInit {
  idHoatDong: any;
  constructor(
    private route: ActivatedRoute,
    private hoatDongService: HoatDongService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idHoatDong = params.get('IdCoSoThuY');
    });
    this.hoatDongService.hoatDongForTrueListVoiCSYT(this.idHoatDong);//hoatDongForTrueListProperty
  }
}
