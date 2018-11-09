import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hoat-dong',
  templateUrl: './hoat-dong.component.html',
  styleUrls: ['./hoat-dong.component.css']
})
export class HoatDongComponent implements OnInit {

  id: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    console.log('hoatdong'+this.id);
  }

}
