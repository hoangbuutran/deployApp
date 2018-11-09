import { Component, OnInit } from '@angular/core';
import { LoaiSanPhamModel } from '../../../shared/Model/LoaiSanPham.model';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loai-san-pham-list',
  templateUrl: './loai-san-pham-list.component.html',
  styleUrls: ['./loai-san-pham-list.component.css']
})
export class LoaiSanPhamListComponent implements OnInit {

  arrayDelete = [];
  constructor(
    private loaiSanPhamService: LoaiSanPhamService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.loaiSanPhamService.loaiSanPhamListWithIdShop();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  // xoaNhieu() {
  //   this.arrayDelete.forEach(element => {
  //     this.loaiSanPhamService.delete(element).subscribe(x => {
  //       this.loaiSanPhamService.loaiSanPhamListWithIdShop();
  //     });
  //   });
  //   this.toastr.warning('Xóa nhiều loại sản phẩm thành công', 'Thông báo');
  // }

  khoaMo(id: number) {

    if (confirm('Bạn có chắc chắn muốn khóa loại sản phẩm ?') === true) {
      this.loaiSanPhamService.KhoaMo(id)
        .subscribe(x => {
          this.loaiSanPhamService.loaiSanPhamListWithIdShop();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  // xoaLoaiSanPham(id: number) {
  //   if (confirm('Bạn có chắc chắn muốn xóa loại sản phẩm ?') === true) {
  //     this.loaiSanPhamService.delete(id)
  //       .subscribe(x => {
  //         this.loaiSanPhamService.loaiSanPhamListWithIdShop();
  //         this.toastr.warning(x.message, 'Thông báo');
  //       });
  //   }
  // }

}
