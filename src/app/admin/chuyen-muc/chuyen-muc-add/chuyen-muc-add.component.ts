import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ChuyenMucService } from '../../../shared/Service/ChuyenMuc.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chuyen-muc-add',
  templateUrl: './chuyen-muc-add.component.html',
  styleUrls: ['./chuyen-muc-add.component.css']
})
export class ChuyenMucAddComponent implements OnInit {

  ChuyenMucAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Chuyên Mục' },
    { id: false, name: 'Khóa Chuyên Mục' },
  ];

  constructor(
    private fb: FormBuilder,
    private chuyenMucService: ChuyenMucService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.ChuyenMucAddForm = this.fb.group({
      TenChuyenMuc: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  ChuyenMucAddSubmitForm() {
    this.chuyenMucService.create(this.ChuyenMucAddForm.value)
      .subscribe(data => {
        this.chuyenMucService.chuyenMucList();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/admin/chuyenmuc/list']);
  }

}
