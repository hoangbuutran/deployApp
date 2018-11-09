import { Component, OnInit } from '@angular/core';
import { QuyenService } from '../../shared/Service/Quyen.service';
import { GiongThuCungService } from '../../shared/Service/GiongThuCung.service';
import { ChuyenMucService } from '../../shared/Service/ChuyenMuc.service';
import { CoSoThuYService } from '../../shared/Service/CoSoThuY.service';
import { ShopService } from '../../shared/Service/Shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countChuyenMuc;
  countGiongThuCung;
  countQuyen;
  countCoSoThuY;
  countShop;
  constructor(
    private quyenService: QuyenService,
    private giongThuCungService: GiongThuCungService,
    private chuyenMucService: ChuyenMucService,
    private coSoThuYService: CoSoThuYService,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.coSoThuYService.countCoSoThuY().subscribe(res => this.countCoSoThuY = res.data);
    this.quyenService.countQuyen().subscribe(data => this.countQuyen = data);
    this.giongThuCungService.countgiongthucung().subscribe(res => this.countGiongThuCung = res.data);
    this.chuyenMucService.countchuyenMuc().subscribe(res => this.countChuyenMuc = res.data);
    this.shopService.countshop().subscribe(res => this.countShop = res.data);
  }
}
