import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShopService } from '../../shared/Service/Shop.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-profile-shop',
  templateUrl: './change-profile-shop.component.html',
  styleUrls: ['./change-profile-shop.component.css']
})
export class ChangeProfileShopComponent implements OnInit {
  id: any;
  ShopEditProfileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private shopService: ShopService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdShop');
    });
    this.ShopEditProfileForm = this.fb.group({
      IdShop: [''],
      TenShop: ['', Validators.required],
      DiaChi: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      DoTinCay: ['', Validators.required],
      TrangThai: ['true', Validators.required],
      IdTaiKhoan: [''],
    });
    this.loadForm();
  }

  loadForm() {
    this.shopService.view(this.id).subscribe(res => {
      this.ShopEditProfileForm.get('IdShop').patchValue(res.data.IdShop);
      this.ShopEditProfileForm.get('TenShop').patchValue(res.data.TenShop);
      this.ShopEditProfileForm.get('DiaChi').patchValue(res.data.DiaChi);
      this.ShopEditProfileForm.get('SDT').patchValue(res.data.SDT);
      this.ShopEditProfileForm.get('Email').patchValue(res.data.Email);
      this.ShopEditProfileForm.get('DoTinCay').patchValue(res.data.DoTinCay);
      this.ShopEditProfileForm.get('TrangThai').patchValue(res.data.TrangThai);
      this.ShopEditProfileForm.get('IdTaiKhoan').patchValue(res.data.IdTaiKhoan);
    });
  }

  ShopEditProfileSubmitForm() {
    this.shopService.Update(this.ShopEditProfileForm.value)
      .subscribe(data => {
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/shop/home']);
  }

}
