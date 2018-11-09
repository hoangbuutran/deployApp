import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/Service/Shop.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlshop-add',
  templateUrl: './qlshop-add.component.html',
  styleUrls: ['./qlshop-add.component.css']
})
export class QlshopAddComponent implements OnInit {

  ShopAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở shop' },
    { id: false, name: 'Khóa shop' },
  ];

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.ShopAddForm = this.fb.group({
      TenShop: ['', Validators.required],
      DiaChi: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      DoTinCay: ['100', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  ShopAddSubmitForm() {
    this.shopService.create(this.ShopAddForm.value)
      .subscribe(data => {
        this.shopService.viewListShop();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/admin/qlshop/list']);
  }

}
