import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlsucKhoeThuCungRoutingModule } from './qlsuc-khoe-thu-cung-routing.module';
import { QlsucKhoeThuCungComponent } from './qlsuc-khoe-thu-cung.component';
import { QlsucKhoeThuCungListComponent } from './qlsuc-khoe-thu-cung-list/qlsuc-khoe-thu-cung-list.component';
import { QlsucKhoeThuCungAddComponent } from './qlsuc-khoe-thu-cung-add/qlsuc-khoe-thu-cung-add.component';
import { QlsucKhoeThuCungEditComponent } from './qlsuc-khoe-thu-cung-edit/qlsuc-khoe-thu-cung-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    QlsucKhoeThuCungRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditorModule,
  ],
  declarations: [QlsucKhoeThuCungComponent, QlsucKhoeThuCungListComponent, QlsucKhoeThuCungAddComponent, QlsucKhoeThuCungEditComponent]
})
export class QlsucKhoeThuCungModule { }
