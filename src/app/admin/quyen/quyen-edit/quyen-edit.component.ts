import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuyenService } from '../../../shared/Service/Quyen.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quyen-edit',
  templateUrl: './quyen-edit.component.html',
  styleUrls: ['./quyen-edit.component.css']
})
export class QuyenEditComponent implements OnInit {
  id = '';
  QuyenEditForm: FormGroup;

  TrangThaiList = [
    { id: true, name: 'Mở Quyền' },
    { id: false, name: 'Khóa Quyền' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private quyenService: QuyenService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdQuyen');
    });
    this.QuyenEditForm = this.fb.group({
      IdQuyen: [''],
      TenQuyen: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.quyenService.view(this.id).subscribe(data => {
      this.QuyenEditForm.get('IdQuyen').patchValue(data.IdQuyen);
      this.QuyenEditForm.get('TenQuyen').patchValue(data.TenQuyen);
      this.QuyenEditForm.get('TrangThai').patchValue(data.TrangThai);
    });
  }

  QuyenEditSubmitForm() {
    this.quyenService.Update(this.QuyenEditForm.value)
      .subscribe(data => {
        this.quyenService.QuyenList();
        this.toastr.success('Quyền đã được sửa thành công', 'Thông báo');
      });
    this.router.navigate(['/admin/quyen/list']);
  }
}
