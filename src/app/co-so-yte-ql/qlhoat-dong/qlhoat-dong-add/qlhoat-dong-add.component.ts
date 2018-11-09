import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HoatDongService } from '../../../shared/Service/HoatDong.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qlhoat-dong-add',
  templateUrl: './qlhoat-dong-add.component.html',
  styleUrls: ['./qlhoat-dong-add.component.css']
})
export class QlhoatDongAddComponent implements OnInit {

  hoatDongAddForm: FormGroup;
  sessionuser: any;

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;
  file;

  tinhTrangList = [
    { id: true, name: 'Mở hoạt động' },
    { id: false, name: 'Khóa hoạt động' },
  ];

  constructor(
    private fb: FormBuilder,
    private hoatDongService: HoatDongService,
    private router: Router,
    private toastr: ToastrService,
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.hoatDongAddForm = this.fb.group({
      TenHoatDong: ['', Validators.required],
      MoTa: ['', Validators.required],
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      TinhTrang: ['', Validators.required],
      ImageShow: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.sessionuser = this.sessionService.getToken();
    this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.hoatDongAddForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.hoatDongAddForm.get('ImageShow').patchValue(file.item(0).name);
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  hoatDongAddSubmitForm() {
    
    this.hoatDongService.create(this.hoatDongAddForm.value)
      .subscribe(data => {
        this.hoatDongService.upFile(data.data.IdHoatDong, this.fileToUpload)
          .subscribe(res => {
            this.toastr.success(res.message, 'Thông báo');
          });
        this.hoatDongService.hoatDongListVoiCSYT();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/cosoyteql/qlhoatdong/list']);
  }

}
