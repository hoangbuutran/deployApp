import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../../shared/Service/session.service';
import { ShopService } from '../../../shared/Service/Shop.service';
import { LoaiSanPhamModel } from '../../../shared/Model/LoaiSanPham.model';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';

@Component({
  selector: 'app-san-pham-add',
  templateUrl: './san-pham-add.component.html',
  styleUrls: ['./san-pham-add.component.css']
})
export class SanPhamAddComponent implements OnInit {

  myFiles: string[] = [];

  sessionuser: any;
  SanPhamAddForm: FormGroup;

  urls = new Array<string>();

  trangThaiList = [
    { id: true, name: 'Mở sản phẩm' },
    { id: false, name: 'Khóa sản phẩm' },
  ];
  loaiSanPham: LoaiSanPhamModel[];

  constructor(
    private fb: FormBuilder,
    private sanPhamService: SanPhamService,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private shopService: ShopService,
    private loaiSanPhamService: LoaiSanPhamService,
  ) { }

  ngOnInit() {
    this.SanPhamAddForm = this.fb.group({
      TenSanPham: ['', Validators.required],
      IdLoaiSanPham: [''],
      Gia: ['', Validators.required],
      SoLuong: ['', Validators.required],
      DacDiem: ['', Validators.required],
      IdShop: [''],
      TrangThai: ['', Validators.required],
    });
    this.ganGiaTri();
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }

    this.urls = [];
    let files = e.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  ganGiaTri() {
    this.sessionuser = this.sessionService.getToken();
    this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.SanPhamAddForm.get('IdShop').patchValue(res.data.IdShop);
      this.loaiSanPhamService.loaiSanPhamListWithIdShop();
    });
  }


  SanPhamAddSubmitForm() {
    this.sanPhamService.create(this.SanPhamAddForm.value)
      .subscribe(data => {
        for (var i = 0; i < this.myFiles.length; i++) {
          this.sanPhamService.uploadFiles(data.data.IdSanPham, this.myFiles[i]).subscribe(res => {
            this.toastr.success(res.message, 'Thông báo');
          });
        }
        this.sanPhamService.sanPhamListWithIdShop();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/shop/sanpham/list']);
  }
}
