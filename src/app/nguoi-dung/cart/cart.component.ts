import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../shared/Model/ShoppingCart.model';
import { Observable } from 'rxjs/Observable';
import { SanPhamModel } from '../../shared/Model/SanPham.model';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { CartItem } from '../../shared/Model/CartItem.model';
import { ShoppingCartService } from '../../shared/Service/ShoppingCart.service';
import { SanPhamService } from '../../shared/Service/SanPham.service';
import { Router } from '@angular/router';
import { ViewCartModel } from '../../shared/Model/ViewCart.model';
import { HoaDonService } from '../../shared/Service/HoaDon.service';
import { SessionService } from '../../shared/Service/session.service';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';
import { ToastrService } from 'ngx-toastr';

interface ICartItemWithProduct extends CartItem {
  product: SanPhamModel;
  cartItems: CartItem;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tongTienGioHang = 0;
  message: any;
  sessionuser: any;
  idNguoiDung: any;
  listItemInCart: CartItem[];
  public cart: Observable<ShoppingCart>;
  private cartSubscription: Subscription;
  listViewCart = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private sanPhamService: SanPhamService,
    private router: Router,
    private hoaDonService: HoaDonService,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
  ) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart2) => {
      cart2.items.forEach(element => {
        this.sanPhamService.view(element.IdSanPham).subscribe(res => {
          const viewcart = new ViewCartModel();
          viewcart.IdSanPham = element.IdSanPham;
          viewcart.TenSanPham = res.data.TenSanPham;
          viewcart.SoLuong = element.SoLuong;
          viewcart.Gia = element.Gia;
          viewcart.tongTien = element.tongTien;
          this.listViewCart.push(viewcart);
          this.tongTienGioHang = this.tongTienGioHang + element.tongTien
        });
      });
    });

    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.idNguoiDung = res.data.IdNguoiDung;
    });
  }



  public emptyCart(): void {
    this.shoppingCartService.empty();
    this.listViewCart = [];
    this.tongTienGioHang = 0;
  }

  xemSanPham(IdSanPham: number | string) {
    console.log(IdSanPham);
  }

  removeSanPham(IdSanPham: number | string) {
    this.sanPhamService.view(IdSanPham).subscribe(res => {
      this.shoppingCartService.addItem(res.data, -1);
      this.listViewCart = [];
      this.tongTienGioHang = 0;
    });
  }

  thanhToan(idNguoiDung: number | string) {
    if (this.listViewCart.length === 0) {
      alert('giỏ hang khong co san pham nao');
    } else {
      if (confirm('Bạn có chắc chắn mua sản phẩm trong giỏ ?') === true) {
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe((cart2) => {
          this.listItemInCart = cart2.items;
        });
        this.hoaDonService.kiemTraVaThanhToan(this.listItemInCart, this.idNguoiDung).subscribe(res => {
          if (res.isSuccess === true) {
            this.shoppingCartService.empty();
            this.message = '';
            this.tongTienGioHang = 0;
            this.listViewCart = [];
            this.toastr.success('Đơn hàng đã được tạo, vui lòng chờ admin duyệt đơn hàng', 'Thông báo');
          } else {
            this.message = res.message;
            this.toastr.success(res.message, 'Thông báo');
          }
        });
      }
    }
  }

}
