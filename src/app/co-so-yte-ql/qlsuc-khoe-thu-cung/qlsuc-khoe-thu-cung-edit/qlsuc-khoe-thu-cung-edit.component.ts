import { Component, OnInit } from '@angular/core';
import { SucKhoeThuCungService } from '../../../shared/Service/SucKhoeThuCung.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qlsuc-khoe-thu-cung-edit',
  templateUrl: './qlsuc-khoe-thu-cung-edit.component.html',
  styleUrls: ['./qlsuc-khoe-thu-cung-edit.component.css']
})
export class QlsucKhoeThuCungEditComponent implements OnInit {


  id = '';
  sucKhoeThuCungEditForm: FormGroup;
  sessionuser: any;
  tinhTrangList = [
    { id: true, name: 'Mở suc Khoe Thu Cung' },
    { id: false, name: 'Khóa suc Khoe Thu Cung' },
  ];

  imageUrl = '/assets/Image/avatar5.png';
  fileToUpload: File = null;



  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sucKhoeThuCungService: SucKhoeThuCungService,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdSKTC');
    });

    this.sucKhoeThuCungEditForm = this.fb.group({
      IdSKTC: ['', Validators.required],
      TenSKTC: ['', Validators.required],
      NgayThang: ['', Validators.required],
      MoTa: ['', Validators.required],
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      TinhTrang: ['', Validators.required],
      ImageShow: ['', Validators.required],
    });

    this.loadForm();

  }

  loadForm() {
    this.sucKhoeThuCungService.view(this.id).subscribe(res => {
      this.sucKhoeThuCungEditForm.get('IdSKTC').patchValue(res.data.IdSKTC);
      this.sucKhoeThuCungEditForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.sucKhoeThuCungEditForm.get('NgayThang').patchValue(res.data.NgayThang);
      this.sucKhoeThuCungEditForm.get('TenSKTC').patchValue(res.data.TenSKTC);
      this.sucKhoeThuCungEditForm.get('MoTa').patchValue(res.data.MoTa);
      this.sucKhoeThuCungEditForm.get('NoiDung').patchValue(res.data.NoiDung);
      this.sucKhoeThuCungEditForm.get('ImageShow').patchValue(res.data.ImageShow);
      this.imageUrl = 'http://localhost:1650/Images/' + res.data.ImageShow;
      this.sucKhoeThuCungEditForm.get('TinhTrang').patchValue(res.data.TinhTrang);
    });
  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    this.sucKhoeThuCungEditForm.get('ImageShow').patchValue(this.fileToUpload);
  }


  sucKhoeThuCungEditSubmitForm() {
    if (typeof this.sucKhoeThuCungEditForm.value.HinhAnh === 'string') {
      this.sucKhoeThuCungService.Update(this.sucKhoeThuCungEditForm.value)
        .subscribe(res => {
          this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
          this.toastr.success(res.message, 'Thông báo');
        });
    } else {
      this.sucKhoeThuCungService.Update(this.sucKhoeThuCungEditForm.value)
        .subscribe(res => {
          this.sucKhoeThuCungService.upFile(this.id, this.fileToUpload)
            .subscribe(res1 => {
              this.toastr.success(res.message, 'Thông báo');
            });
          this.sucKhoeThuCungService.sucKhoeThuCungListVoiCSYT();
          this.toastr.success(res.message, 'Thông báo');
        });
    }
    this.router.navigate(['/cosoyteql/qlsuckhoethucung/list']);
  }

}
