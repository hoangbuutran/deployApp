import { Component, OnInit } from '@angular/core';
import { ThongKeService } from '../../../shared/Service/ThongKe.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-san-pham10-max-thang',
  templateUrl: './san-pham10-max-thang.component.html',
  styleUrls: ['./san-pham10-max-thang.component.css']
})
export class SanPham10MaxThangComponent implements OnInit {

  ThongKe10Form: FormGroup;
  
  constructor(
    private thongKeService: ThongKeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.ThongKe10Form = this.fb.group({
      NgayThang: ['', Validators.required],
    });
  }

  ThongKe10SubmitForm(){
    this.thongKeService.thongKeView10SanPhamMaxMonVoiIdShop(this.ThongKe10Form.value);
  }
}
