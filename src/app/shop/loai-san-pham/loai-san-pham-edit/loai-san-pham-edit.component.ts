import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';

@Component({
  selector: 'app-loai-san-pham-edit',
  templateUrl: './loai-san-pham-edit.component.html',
  styleUrls: ['./loai-san-pham-edit.component.css']
})
export class LoaiSanPhamEditComponent implements OnInit {

  id = '';
  LoaiSanPhamEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Loại sản phẩm' },
    { id: false, name: 'Khóa Loại sản phẩm' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loaiSanPhamService: LoaiSanPhamService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdLoaiSanPham');
    });
    this.LoaiSanPhamEditForm = this.fb.group({
      IdLoaiSanPham: [''],
      TenLoaiSanPham: ['', Validators.required],
      TrangThai: ['', Validators.required],
      IdShop: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.loaiSanPhamService.view(this.id).subscribe(res => {
      this.LoaiSanPhamEditForm.get('IdLoaiSanPham').patchValue(res.data.IdLoaiSanPham);
      this.LoaiSanPhamEditForm.get('TenLoaiSanPham').patchValue(res.data.TenLoaiSanPham);
      this.LoaiSanPhamEditForm.get('TrangThai').patchValue(res.data.TrangThai);
      this.LoaiSanPhamEditForm.get('IdShop').patchValue(res.data.IdShop);
    });
  }

  LoaiSanPhamEditSubmitForm() {
    this.loaiSanPhamService.Update(this.LoaiSanPhamEditForm.value)
      .subscribe(res => {
        this.loaiSanPhamService.loaiSanPhamListWithIdShop();
        this.toastr.success(res.message, 'Thông báo');
      });
    this.router.navigate(['/shop/loaisanpham/list']);
  }

}

