import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/Service/api.service';
import { SessionService } from './shared/Service/session.service';
import { QuyenService } from './shared/Service/Quyen.service';
import { TaiKhoanService } from './shared/Service/TaiKhoan.service';
import { AuthGuard } from './shared/Service/Auth.guard.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiongThuCungService } from './shared/Service/GiongThuCung.service';
import { ChuyenMucService } from './shared/Service/ChuyenMuc.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoSoThuYService } from './shared/Service/CoSoThuY.service';
import { NguoiDungService } from './shared/Service/NguoiDungService';
import { ThuCungService } from './shared/Service/ThuCung.service';
import { CanNangService } from './shared/Service/CanNang.service';
import { TinhTrangService } from './shared/Service/TinhTrang.service';
import { ShopService } from './shared/Service/Shop.service';
import { LoaiSanPhamService } from './shared/Service/LoaiSanPham.service';
import { SanPhamService } from './shared/Service/SanPham.service';
import { HoaDonService } from './shared/Service/HoaDon.service';
import { EscapeHtmlPipe } from './shared/Pipe/EscapeHtmlPipe.pipe';
import { HinhAnhSanPhamService } from './shared/Service/HinhAnhSanPham.service';
import { ErrorService } from './shared/Service/error.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UploadFileService } from './shared/Service/UploadFile.service';
import { BinhLuanService } from './shared/Service/BinhLuan.service';
import { ThongKeService } from './shared/Service/ThongKe.service';
import { BaiVietService } from './shared/Service/BaiViet.service';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ShoppingCartService } from './shared/Service/ShoppingCart.service';
import { LocalStorageServie, Storage123Service } from './shared/Service/LocalStorage.service';
import { DichVuService } from './shared/Service/DichVu.service';
import { HoatDongService } from './shared/Service/HoatDong.service';
import { GioiThieuService } from './shared/Service/GioiThieu.service';
import { SucKhoeThuCungService } from './shared/Service/SucKhoeThuCung.service';
import { PhieuHenKhamService } from './shared/Service/PhieuHenKham.service';
import { LichSuKhamService } from './shared/Service/LichSuKham.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ForgotPassComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    ApiService,
    SessionService,
    QuyenService,
    ShopService,
    NguoiDungService,
    ThuCungService,
    CoSoThuYService,
    UploadFileService,
    ShoppingCartService,
    LocalStorageServie,
    { provide: Storage123Service, useClass: LocalStorageServie },
    {
      deps: [Storage123Service],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    },
    TaiKhoanService,
    BinhLuanService,
    BaiVietService,
    HoaDonService,
    ErrorService,
    DichVuService,
    HoatDongService,
    GioiThieuService,
    SucKhoeThuCungService,
    PhieuHenKhamService,
    LoaiSanPhamService,
    SanPhamService,
    CanNangService,
    TinhTrangService,
    GiongThuCungService,
    ThongKeService,
    LichSuKhamService,
    ChuyenMucService,
    HinhAnhSanPhamService,
    AuthGuard,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
