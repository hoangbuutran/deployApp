import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuyenService } from '../../../shared/Service/Quyen.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quyen-add',
  templateUrl: './quyen-add.component.html',
  styleUrls: ['./quyen-add.component.css']
})
export class QuyenAddComponent implements OnInit {

  QuyenAddForm: FormGroup;

  TrangThaiList = [
    { id: true, name: 'Mở Quyền' },
    { id: false, name: 'Khóa Quyền' },
  ];

  constructor(
    private fb: FormBuilder,
    private quyenService: QuyenService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.QuyenAddForm = this.fb.group({
      TenQuyen: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  QuyenAddSubmitForm() {
    this.quyenService.create(this.QuyenAddForm.value)
      .subscribe(data => {
        this.quyenService.QuyenList();
        this.toastr.success('Quyền mới đã được tạo', 'Thông báo');
      });
    this.router.navigate(['/admin/quyen/list']);
  }
}
