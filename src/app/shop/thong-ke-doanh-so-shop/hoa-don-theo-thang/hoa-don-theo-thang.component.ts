import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThongKeService } from '../../../shared/Service/ThongKe.service';

@Component({
  selector: 'app-hoa-don-theo-thang',
  templateUrl: './hoa-don-theo-thang.component.html',
  styleUrls: ['./hoa-don-theo-thang.component.css']
})
export class HoaDonTheoThangComponent implements OnInit {

  ThongKeHoaDonTheoThangForm: FormGroup;
  
  constructor(
    private thongKeService: ThongKeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.ThongKeHoaDonTheoThangForm = this.fb.group({
      TuNgay: ['', Validators.required],
    });
  }

  ThongKeHoaDonTheoThangFormSubmitForm(){
    this.thongKeService.thongKeViewHoaDonTheoThangVoiIdShop(this.ThongKeHoaDonTheoThangForm.value);
  }
}
