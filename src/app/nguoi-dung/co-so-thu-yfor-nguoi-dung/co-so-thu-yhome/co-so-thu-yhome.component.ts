import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-co-so-thu-yhome',
  templateUrl: './co-so-thu-yhome.component.html',
  styleUrls: ['./co-so-thu-yhome.component.css']
})
export class CoSoThuYhomeComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
  }

}
