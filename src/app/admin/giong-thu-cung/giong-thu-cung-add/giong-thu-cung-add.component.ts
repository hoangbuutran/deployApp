import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GiongThuCungService } from '../../../shared/Service/GiongThuCung.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giong-thu-cung-add',
  templateUrl: './giong-thu-cung-add.component.html',
  styleUrls: ['./giong-thu-cung-add.component.css']
})
export class GiongThuCungAddComponent implements OnInit {

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;
  file;
  GiongThuCungAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Giống Thú Cưng' },
    { id: false, name: 'Khóa Giống Thú Cưng' },
  ];

  constructor(
    private fb: FormBuilder,
    private giongThuCungService: GiongThuCungService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.GiongThuCungAddForm = this.fb.group({
      TenGiongThuCung: ['', Validators.required],
      GioiThieu: ['', Validators.required],
      HinhAnh: ['', Validators.required],
      DacDiem: ['', Validators.required],
      TinhCach: ['', Validators.required],
      CachChamSoc: ['', Validators.required],
      LuuYSucKhoe: ['', Validators.required],
      LichSu: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.GiongThuCungAddForm.get('HinhAnh').patchValue(file.item(0).name);
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  GiongThuCungAddSubmitForm() {
    this.giongThuCungService.create(this.GiongThuCungAddForm.value)
      .subscribe(data => {
        this.giongThuCungService.upFile(data.data.IdGiongThuCung, this.fileToUpload)
          .subscribe(res => {
            this.toastr.success(res.message, 'Thông báo');
          });
        this.giongThuCungService.giongThuCungList();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/admin/giongthucung/list']);
  }
}
