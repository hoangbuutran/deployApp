import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DichVuService } from '../../../shared/Service/DichVu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qldich-vu-edit',
  templateUrl: './qldich-vu-edit.component.html',
  styleUrls: ['./qldich-vu-edit.component.css']
})
export class QldichVuEditComponent implements OnInit {
  id = '';
  dichVuEditForm: FormGroup;
  sessionuser: any;
  tinhTrangList = [
    { id: true, name: 'Mở dịch vụ' },
    { id: false, name: 'Khóa dịch vụ' },
  ];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dichVuService: DichVuService,
    private router: Router,
    private toastr: ToastrService,
    private coSoThuYService: CoSoThuYService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdDichVu');
    });
    this.dichVuEditForm = this.fb.group({
      IdDichVu: ['', Validators.required],
      TenDichVu: ['', Validators.required],
      MoTaDichVu: ['', Validators.required],
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      TinhTrang: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.dichVuService.view(this.id).subscribe(res => {
      this.dichVuEditForm.get('IdDichVu').patchValue(res.data.IdDichVu);
      this.dichVuEditForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.dichVuEditForm.get('TenDichVu').patchValue(res.data.TenDichVu);
      this.dichVuEditForm.get('MoTaDichVu').patchValue(res.data.MoTaDichVu);
      this.dichVuEditForm.get('NoiDung').patchValue(res.data.NoiDung);
      this.dichVuEditForm.get('TinhTrang').patchValue(res.data.TinhTrang);
    });
  }

  dichVuEditSubmitForm(){
    this.dichVuService.Update(this.dichVuEditForm.value)
    .subscribe(res => {
      this.dichVuService.dichVuListVoiCSYT();
      this.toastr.success(res.message, 'Thông báo');
    });
    this.router.navigate(['/cosoyteql/qldichvu/list']);
  }

}
