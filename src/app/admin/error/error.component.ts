import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../shared/Service/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(
    private errorService: ErrorService,
  ) { }

  ngOnInit() {
    this.errorService.errorList();
  }

}
