import { Component, OnInit } from '@angular/core';
import { HoaDonService } from '../../../shared/Service/HoaDon.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hoa-don-list',
  templateUrl: './hoa-don-list.component.html',
  styleUrls: ['./hoa-don-list.component.css']
})
export class HoaDonListComponent implements OnInit {

  constructor(
    private hoaDonService: HoaDonService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.hoaDonService.hoaDonListWithIdShop();
  }

}
