import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { BadInput } from './../common/bad-input-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { querySerialize } from '../util/query-serialize';

@Injectable()
export class DataService {
  url;

  constructor(protected http: Http) { }

  get(id) {
    return this.http.get(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getAll(params: object = {}) {
    return this.http.get(this.url, { search: querySerialize(params) })
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resourse) {
    return this.http.post(this.url, JSON.stringify(resourse))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resourse) {
    return this.http.put(this.url + '/' + resourse.id, JSON.stringify(resourse))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response) {
    let e = new AppError(error);
    switch (error.status) {
      case 404:
        e = new NotFoundError();
        break;
      case 400:
        e = new BadInput();
        break;
    }
    return Observable.throw(e);
  }

}
