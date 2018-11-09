import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-co-so-thu-yedit',
  templateUrl: './co-so-thu-yedit.component.html',
  styleUrls: ['./co-so-thu-yedit.component.css']
})
export class CoSoThuYeditComponent implements OnInit {

  id = '';
  CoSoThuYEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Cơ Sở thú y' },
    { id: false, name: 'Khóa Cơ Sở thú y' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private coSoThuYService: CoSoThuYService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    this.CoSoThuYEditForm = this.fb.group({
      IdCoSoThuY: [''],
      TenCoSoThuY: ['', Validators.required],
      DiaDiem: ['', Validators.required],
      IdTaiKhoan: [''],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.coSoThuYService.view(this.id).subscribe(res => {
      this.CoSoThuYEditForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.CoSoThuYEditForm.get('IdTaiKhoan').patchValue(res.data.IdTaiKhoan);
      this.CoSoThuYEditForm.get('TenCoSoThuY').patchValue(res.data.TenCoSoThuY);
      this.CoSoThuYEditForm.get('DiaDiem').patchValue(res.data.DiaDiem);
      this.CoSoThuYEditForm.get('SDT').patchValue(res.data.SDT);
      this.CoSoThuYEditForm.get('Email').patchValue(res.data.Email);
      this.CoSoThuYEditForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }

  CoSoThuYEditSubmitForm() {
    this.coSoThuYService.Update(this.CoSoThuYEditForm.value)
      .subscribe(res => {
        this.coSoThuYService.coSoThuYList();
        this.toastr.success(res.message, 'Thông báo');
      });
    this.router.navigate(['/admin/cosothuy/list']);
  }
}
