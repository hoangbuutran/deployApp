import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ShoppingCart } from '../Model/ShoppingCart.model';
import { CartItem } from '../Model/CartItem.model';
import { SanPhamModel } from '../Model/SanPham.model';
import { Storage123Service } from './LocalStorage.service';
import { SanPhamService } from './SanPham.service';



@Injectable()

export class ShoppingCartService {
    CART_KEY = 'cart';
    private storage: Storage;
    private subscriptionObservable: Observable<ShoppingCart>;
    private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
    private products: SanPhamModel[];

    public constructor(
        private storageService: Storage123Service,
        private sanPhamService: SanPhamService
    ) {
        this.storage = this.storageService.get();
        this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
            this.subscribers.push(observer);
            observer.next(this.retrieve());
            return () => {
                this.subscribers = this.subscribers.filter((obs) => obs !== observer);
            };
        });
    }

    public get(): Observable<ShoppingCart> {
        return this.subscriptionObservable;
    }

    public addItem(product: SanPhamModel, quantity: number): void {
        const cart = this.retrieve();
        let item = cart.items.find((p) => p.IdSanPham === product.IdSanPham);
        if (item === undefined) {
            item = new CartItem();
            item.IdSanPham = product.IdSanPham;
            item.Gia = product.Gia;
            item.tongTien = 1 * item.Gia;
            cart.items.push(item);
        }

        item.SoLuong += quantity;
        item.tongTien = item.SoLuong * item.Gia;
        cart.items = cart.items.filter((cartItem) => cartItem.SoLuong > 0);
        if (cart.items.length === 0) {
            cart.deliveryOptionId = undefined;
        }
        // this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    }

    public empty(): void {
        const newCart = new ShoppingCart();
        this.save(newCart);
        this.dispatch(newCart);
    }

    // tinh tong tien cua gio hang
    private calculateCart(cart: ShoppingCart): void {
        cart.itemsTotal = cart.items
            .map((item) => item.SoLuong * this.products.find((p) => p.IdSanPham === item.IdSanPham).Gia)
            .reduce((previous, current) => previous + current, 0);
    }

    public retrieve(): ShoppingCart {
        const cart = new ShoppingCart();
        const storedCart = this.storage.getItem(this.CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }

        return cart;
    }

    public retrievelan2(): CartItem[] {
        const cart = new ShoppingCart();
        const storedCart = this.storage.getItem(this.CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }

        return cart.items;
    }

    private save(cart: ShoppingCart): void {
        this.storage.setItem(this.CART_KEY, JSON.stringify(cart));
    }

    private dispatch(cart: ShoppingCart): void {
        this.subscribers
            .forEach((sub) => {
                try {
                    sub.next(cart);
                } catch (e) {
                    // we want all subscribers to get the update even if one errors.
                }
            });
    }
}
