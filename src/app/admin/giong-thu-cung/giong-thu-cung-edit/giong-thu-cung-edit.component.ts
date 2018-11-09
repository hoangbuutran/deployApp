import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GiongThuCungService } from '../../../shared/Service/GiongThuCung.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-giong-thu-cung-edit',
  templateUrl: './giong-thu-cung-edit.component.html',
  styleUrls: ['./giong-thu-cung-edit.component.css']
})
export class GiongThuCungEditComponent implements OnInit {

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;

  id = '';
  GiongThuCungEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Giống Thú Cưng' },
    { id: false, name: 'Khóa Giống Thú Cưng' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private giongThuCungService: GiongThuCungService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdGiongThuCung');
    });
    this.GiongThuCungEditForm = this.fb.group({
      IdGiongThuCung: [''],
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
    this.loadForm();
  }

  loadForm() {
    this.giongThuCungService.view(this.id).subscribe(res => {
      this.GiongThuCungEditForm.get('IdGiongThuCung').patchValue(this.id);
      this.GiongThuCungEditForm.get('TenGiongThuCung').patchValue(res.data.TenGiongThuCung);
      this.GiongThuCungEditForm.get('GioiThieu').patchValue(res.data.GioiThieu);
      this.GiongThuCungEditForm.get('HinhAnh').patchValue(res.data.HinhAnh);
      this.imageUrl = 'http://localhost:1650/Images/' + res.data.HinhAnh;
      this.GiongThuCungEditForm.get('DacDiem').patchValue(res.data.DacDiem);
      this.GiongThuCungEditForm.get('TinhCach').patchValue(res.data.TinhCach);
      this.GiongThuCungEditForm.get('CachChamSoc').patchValue(res.data.CachChamSoc);
      this.GiongThuCungEditForm.get('LuuYSucKhoe').patchValue(res.data.LuuYSucKhoe);
      this.GiongThuCungEditForm.get('LichSu').patchValue(res.data.LichSu);
      this.GiongThuCungEditForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    this.GiongThuCungEditForm.get('HinhAnh').patchValue(this.fileToUpload);
  }

  GiongThuCungEditSubmitForm() {
    if (typeof this.GiongThuCungEditForm.value.HinhAnh === 'string') {
      this.giongThuCungService.Update(this.GiongThuCungEditForm.value)
        .subscribe(res => {
          this.giongThuCungService.giongThuCungList();
          this.toastr.success(res.message, 'Thông báo');
        });
    } else {
      this.giongThuCungService.Update(this.GiongThuCungEditForm.value)
        .subscribe(res => {
          this.giongThuCungService.upFile(this.id, this.fileToUpload)
            .subscribe(res1 => {
              this.toastr.success(res.message, 'Thông báo');
            });
          this.giongThuCungService.giongThuCungList();
          this.toastr.success(res.message, 'Thông báo');
        });
    }
    this.router.navigate(['/admin/giongthucung/list']);
  }

}
