import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

export abstract class Storage123Service {
  public abstract get(): Storage;
}

@Injectable()

export class LocalStorageServie extends Storage123Service {
  public get(): Storage {
    return localStorage;
  }
}
