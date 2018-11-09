import { Component, OnInit } from '@angular/core';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../shared/Service/session.service';
import { ShopService } from '../../../shared/Service/Shop.service';

@Component({
  selector: 'app-loai-san-pham-add',
  templateUrl: './loai-san-pham-add.component.html',
  styleUrls: ['./loai-san-pham-add.component.css']
})
export class LoaiSanPhamAddComponent implements OnInit {
  sessionuser: any;
  LoaiSanPhamAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở loại sản phẩm' },
    { id: false, name: 'Khóa loại sản phẩm' },
  ];
  constructor(
    private fb: FormBuilder,
    private loaiSanPhamService: LoaiSanPhamService,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.LoaiSanPhamAddForm = this.fb.group({
      TenLoaiSanPham: ['', Validators.required],
      IdShop: [''],
      TrangThai: ['', Validators.required],
    });
    this.ganIdShop();
  }
  ganIdShop() {
    this.sessionuser = this.sessionService.getToken();
    this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.LoaiSanPhamAddForm.get('IdShop').patchValue(res.data.IdShop);
    });
  }
  LoaiSanPhamAddSubmitForm() {
    this.loaiSanPhamService.create(this.LoaiSanPhamAddForm.value)
      .subscribe(data => {
        this.loaiSanPhamService.loaiSanPhamListWithIdShop();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/shop/loaisanpham/list']);
  }
}
