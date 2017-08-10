import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends DataService {

  constructor(http: Http) {
    super(http);
    this.url = 'http://localhost:8095/user';
  }

}
