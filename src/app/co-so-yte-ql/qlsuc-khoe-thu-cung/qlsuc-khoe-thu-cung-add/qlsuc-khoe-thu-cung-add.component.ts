import { Component, OnInit } from '@angular/core';
import { SucKhoeThuCungService } from '../../../shared/Service/SucKhoeThuCung.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qlsuc-khoe-thu-cung-add',
  templateUrl: './qlsuc-khoe-thu-cung-add.component.html',
  styleUrls: ['./qlsuc-khoe-thu-cung-add.component.css']
})
export class QlsucKhoeThuCungAddComponent implements OnInit {

  sucKhoeThuCungAddForm: FormGroup;
  sessionuser: any;

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;
  file;

  tinhTrangList = [
    { id: true, name: 'Mở sức khỏe thú cưng' },
    { id: false, name: 'Khóa sức khỏe thú cưng' },
  ];

  constructor(
    private fb: FormBuilder,
    private sucKhoeThuCungService: SucKhoeThuCungService,
    private router: Router,
    private toastr: ToastrService,
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.sucKhoeThuCungAddForm = this.fb.group({
      TenSKTC: ['', Validators.required],
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
      this.sucKhoeThuCungAddForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
    });
  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.sucKhoeThuCungAddForm.get('ImageShow').patchValue(file.item(0).name);
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  sucKhoeThuCungAddSubmitForm() {

    this.sucKhoeThuCungService.create(this.sucKhoeThuCungAddForm.value)
      .subscribe(data => {
        this.sucKhoeThuCungService.upFile(data.data.IdSKTC, this.fileToUpload)
          .subscribe(res => {
            this.toastr.success(res.message, 'Thông báo');
          });
        this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
        this.toastr.success(data.message, 'Thông báo');
      });

    this.router.navigate(['/cosoyteql/qlsuckhoethucung/list']);

  }
}
