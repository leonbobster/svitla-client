import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService extends DataService {

  constructor(http: Http) {
    super(http);
    this.url = 'http://localhost:8095/course';
  }

}
