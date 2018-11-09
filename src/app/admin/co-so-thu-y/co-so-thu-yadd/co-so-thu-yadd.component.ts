import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';

@Component({
  selector: 'app-co-so-thu-yadd',
  templateUrl: './co-so-thu-yadd.component.html',
  styleUrls: ['./co-so-thu-yadd.component.css']
})
export class CoSoThuYaddComponent implements OnInit {

  CoSoThuYAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở cơ sở thú y' },
    { id: false, name: 'Khóa cơ sở thú y' },
  ];

  constructor(
    private fb: FormBuilder,
    private coSoThuYService: CoSoThuYService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.CoSoThuYAddForm = this.fb.group({
      TenCoSoThuY: ['', Validators.required],
      DiaDiem: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  CoSoThuYAddSubmitForm() {
    this.coSoThuYService.create(this.CoSoThuYAddForm.value)
      .subscribe(data => {
        this.coSoThuYService.coSoThuYList();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/admin/cosothuy/list']);
  }
}
