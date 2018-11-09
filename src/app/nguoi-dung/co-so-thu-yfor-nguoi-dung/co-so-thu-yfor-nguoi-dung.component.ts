import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DichVuService } from '../../shared/Service/DichVu.service';

@Component({
  selector: 'app-co-so-thu-yfor-nguoi-dung',
  templateUrl: './co-so-thu-yfor-nguoi-dung.component.html',
  styleUrls: ['./co-so-thu-yfor-nguoi-dung.component.css']
})
export class CoSoThuYforNguoiDungComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    console.log('parent'+this.id);
  }

}
