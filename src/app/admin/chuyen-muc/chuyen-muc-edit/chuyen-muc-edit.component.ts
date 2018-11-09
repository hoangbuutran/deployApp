import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChuyenMucService } from '../../../shared/Service/ChuyenMuc.service';

@Component({
  selector: 'app-chuyen-muc-edit',
  templateUrl: './chuyen-muc-edit.component.html',
  styleUrls: ['./chuyen-muc-edit.component.css']
})
export class ChuyenMucEditComponent implements OnInit {

  id = '';
  ChuyenMucEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Chuyên Mục' },
    { id: false, name: 'Khóa Chuyên Mục' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private chuyenMucService: ChuyenMucService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdChuyenMuc');
    });
    this.ChuyenMucEditForm = this.fb.group({
      IdChuyenMuc: [''],
      TenChuyenMuc: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.chuyenMucService.view(this.id).subscribe(res => {
      this.ChuyenMucEditForm.get('IdChuyenMuc').patchValue(res.data.IdChuyenMuc);
      this.ChuyenMucEditForm.get('TenChuyenMuc').patchValue(res.data.TenChuyenMuc);
      this.ChuyenMucEditForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }

  ChuyenMucEditSubmitForm() {
    this.chuyenMucService.Update(this.ChuyenMucEditForm.value)
      .subscribe(res => {
        this.chuyenMucService.chuyenMucList();
        this.toastr.success(res.message, 'Thông báo');
      });
    this.router.navigate(['/admin/chuyenmuc/list']);
  }

}
