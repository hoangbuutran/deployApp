import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-suc-khoe-thu-cung',
  templateUrl: './suc-khoe-thu-cung.component.html',
  styleUrls: ['./suc-khoe-thu-cung.component.css']
})
export class SucKhoeThuCungComponent implements OnInit {
  
  id: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    console.log('sktc'+this.id);
  }

}
