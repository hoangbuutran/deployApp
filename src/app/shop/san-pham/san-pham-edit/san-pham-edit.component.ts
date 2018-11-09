import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../../shared/Service/session.service';
import { ShopService } from '../../../shared/Service/Shop.service';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { HinhAnhSanPhamModel } from '../../../shared/Model/HinhAnhSanPham.model';
import { HinhAnhSanPhamService } from '../../../shared/Service/HinhAnhSanPham.service';

@Component({
  selector: 'app-san-pham-edit',
  templateUrl: './san-pham-edit.component.html',
  styleUrls: ['./san-pham-edit.component.css']
})
export class SanPhamEditComponent implements OnInit {

  id = '';
  SanPhamEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở sản phẩm' },
    { id: false, name: 'Khóa sản phẩm' },
  ];
  sessionuser: any;

  myFiles: string[] = [];
  urls = new Array<string>();

  hinhAnhDetails: HinhAnhSanPhamModel[];
  listLinkHinhAnh = new Array<string>();
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private sanPhamService: SanPhamService,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private shopService: ShopService,
    private loaiSanPhamService: LoaiSanPhamService,
    private hinhAnhSanPhamService: HinhAnhSanPhamService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdSanPham');
    });
    this.SanPhamEditForm = this.fb.group({
      IdSanPham: [''],
      TenSanPham: ['', Validators.required],
      IdLoaiSanPham: [''],
      Gia: ['', Validators.required],
      SoLuong: ['', Validators.required],
      DacDiem: ['', Validators.required],
      IdShop: [''],
      TrangThai: ['', Validators.required],
    });
    this.ganGiaTri();
    this.loadForm();
  }
  
  ganGiaTri() {
    this.sessionuser = this.sessionService.getToken();
    this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.SanPhamEditForm.get('IdShop').patchValue(res.data.IdShop);
      this.loaiSanPhamService.loaiSanPhamListWithIdShop();
      this.hinhAnhSanPhamService.viewHinhAnhSanPhamVoiIdSanPham(this.id).subscribe(res => {
        this.hinhAnhDetails = res.data;
        this.getLink();
      });
    });
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

  xoaAnhCu(){
    if (confirm('Bạn có chắc chắn muốn xóa ảnh của sản phẩm ?') === true) {
      this.hinhAnhSanPhamService.delete(this.SanPhamEditForm.value.IdSanPham).subscribe(res => {
        this.ngOnInit();
        this.toastr.success(res.message, 'Thông báo');
      });
    }
  }

  getLink(){
    this.listLinkHinhAnh = [];
    this.hinhAnhDetails.forEach(element => {
      this.listLinkHinhAnh.push('http://takecareofthepet.somee.com/Images/' + element.LinkHinhAnh);
    });
  }

  loadForm() {
    this.sanPhamService.view(this.id).subscribe(res => {
      this.SanPhamEditForm.get('IdSanPham').patchValue(this.id);
      this.SanPhamEditForm.get('TenSanPham').patchValue(res.data.TenSanPham);
      this.SanPhamEditForm.get('IdLoaiSanPham').patchValue(res.data.IdLoaiSanPham);
      this.SanPhamEditForm.get('Gia').patchValue(res.data.Gia);
      this.SanPhamEditForm.get('SoLuong').patchValue(res.data.SoLuong);
      this.SanPhamEditForm.get('DacDiem').patchValue(res.data.DacDiem);
      this.SanPhamEditForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }
  sanPhamEditSubmitForm() {
    this.sanPhamService.Update(this.SanPhamEditForm.value)
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
