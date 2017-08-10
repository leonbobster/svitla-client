import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { querySerialize } from '../util/query-serialize';

@Injectable()
export class DataService {
  url;

  constructor(private http: Http) { }

  get(id) {
    return this.http.get(this.url + '/' + id)
      .map(response => response.json());
  }

  getAll(params: object = {}) {
    return this.http.get(this.url, { search: querySerialize(params) })
      .map(response => response.json());
  }

  create(resourse) { }

  update(resourse) { }

  delete(id) { }

}
