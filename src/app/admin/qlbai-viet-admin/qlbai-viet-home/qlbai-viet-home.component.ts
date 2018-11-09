import { Component, OnInit } from '@angular/core';
import { BaiVietService } from '../../../shared/Service/BaiViet.service';

@Component({
  selector: 'app-qlbai-viet-home',
  templateUrl: './qlbai-viet-home.component.html',
  styleUrls: ['./qlbai-viet-home.component.css']
})
export class QlbaiVietHomeComponent implements OnInit {

  constructor(
    private baiVietService: BaiVietService,
  ) { }

  ngOnInit() {
    this.baiVietService.viewListBaiViet();
  }

}
