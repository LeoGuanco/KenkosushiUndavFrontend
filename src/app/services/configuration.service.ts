import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()
export class ConfigurationService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  updateConfiguration(id,body){
    const json = JSON.stringify(body);
    return this._http.put(this.api + '/admin/configurations/' + id, json, {headers: this.headers});
  }

}
