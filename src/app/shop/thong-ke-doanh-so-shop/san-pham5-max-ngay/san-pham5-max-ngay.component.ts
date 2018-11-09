import { Component, OnInit } from '@angular/core';
import { ThongKeService } from '../../../shared/Service/ThongKe.service';

@Component({
  selector: 'app-san-pham5-max-ngay',
  templateUrl: './san-pham5-max-ngay.component.html',
  styleUrls: ['./san-pham5-max-ngay.component.css']
})
export class SanPham5MaxNgayComponent implements OnInit {

  constructor(
    private thongKeService: ThongKeService
  ) { }

  ngOnInit() {
    this.thongKeService.thongKeView5SanPhamMaxDayVoiIdShop();
  }

}
