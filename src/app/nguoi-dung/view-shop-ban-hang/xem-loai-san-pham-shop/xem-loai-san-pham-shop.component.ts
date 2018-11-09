import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { SanPhamModel } from '../../../shared/Model/SanPham.model';
import { ShoppingCartService } from '../../../shared/Service/ShoppingCart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-xem-loai-san-pham-shop',
  templateUrl: './xem-loai-san-pham-shop.component.html',
  styleUrls: ['./xem-loai-san-pham-shop.component.css']
})
export class XemLoaiSanPhamShopComponent implements OnInit {

  idShop: any;
  idLoaiSanPham: any;
  listSanPhamVoiIdLoaiSanPham: any;

  constructor(
    private route: ActivatedRoute,
    private sanPhamService: SanPhamService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idShop = params.get('IdShop');
      this.idLoaiSanPham = params.get('IdLoaiSanPham');
      this.loadLaiTrang(this.idLoaiSanPham);
    });
  }

  public addProductToCart(product: SanPhamModel): void {
    this.toastr.success('sản phẩm đã được thêm vào giỏ', 'Thông báo');
    this.shoppingCartService.addItem(product, 1);
  }

  loadLaiTrang(idLoaiSanPham: any) {
    this.sanPhamService.viewSanPhamVoiIdLoaiSanPham(idLoaiSanPham).subscribe(res => {
      this.listSanPhamVoiIdLoaiSanPham = res.data;
    });
  }
}
