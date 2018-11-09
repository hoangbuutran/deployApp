import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { SanPhamModel } from '../../../shared/Model/SanPham.model';
import { ShoppingCartService } from '../../../shared/Service/ShoppingCart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-shop-ban-hang-home',
  templateUrl: './view-shop-ban-hang-home.component.html',
  styleUrls: ['./view-shop-ban-hang-home.component.css']
})
export class ViewShopBanHangHomeComponent implements OnInit {

  idShop: any;
  listSanPhamVoiIdShop: any;
  
  constructor(
    private route: ActivatedRoute,
    private sanPhamService: SanPhamService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idShop = params.get('IdShop');
    });

    this.sanPhamService.viewSanPhamVoiIdShop(this.idShop).subscribe(res => {
      this.listSanPhamVoiIdShop = res.data;
    });
  }

  public addProductToCart(product: SanPhamModel): void {
    this.toastr.success('sản phẩm đã được thêm vào giỏ', 'Thông báo');
    this.shoppingCartService.addItem(product, 1);
  }

}
