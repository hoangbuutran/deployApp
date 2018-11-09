import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThongKeService } from '../../../shared/Service/ThongKe.service';

@Component({
  selector: 'app-hoa-don-trong-khoang-thang',
  templateUrl: './hoa-don-trong-khoang-thang.component.html',
  styleUrls: ['./hoa-don-trong-khoang-thang.component.css']
})
export class HoaDonTrongKhoangThangComponent implements OnInit {

  ThongKeHoaDonTrongKhoangThangForm: FormGroup;
  
  constructor(
    private thongKeService: ThongKeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.ThongKeHoaDonTrongKhoangThangForm = this.fb.group({
      TuNgay: ['', Validators.required],
      DenNgay: ['', Validators.required],
    });
  }

  ThongKeHoaDonTrongKhoangThangFormSubmitForm(){
    this.thongKeService.thongKeViewHoaDonTheoKhoangThangVoiIdShop(this.ThongKeHoaDonTrongKhoangThangForm.value);
  }
}
