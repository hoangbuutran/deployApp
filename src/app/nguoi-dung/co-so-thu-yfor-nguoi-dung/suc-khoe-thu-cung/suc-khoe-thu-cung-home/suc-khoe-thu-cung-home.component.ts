import { Component, OnInit } from '@angular/core';
import { SucKhoeThuCungService } from '../../../../shared/Service/SucKhoeThuCung.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-suc-khoe-thu-cung-home',
  templateUrl: './suc-khoe-thu-cung-home.component.html',
  styleUrls: ['./suc-khoe-thu-cung-home.component.css']
})
export class SucKhoeThuCungHomeComponent implements OnInit {
  idsucKhoeThuCung: any;
  constructor(
    private route: ActivatedRoute,
    private sucKhoeThuCungService: SucKhoeThuCungService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idsucKhoeThuCung = params.get('IdCoSoThuY');
    });
    this.sucKhoeThuCungService.sucKhoeThuCungForTrueListVoiCSYT(this.idsucKhoeThuCung);//sucKhoeThuCungForTrueListProperty
  }
}
