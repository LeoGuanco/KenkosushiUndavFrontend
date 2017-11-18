import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {GLOBAL} from "./global";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private api: string;

  constructor(private _http: Http) {
    this.api = GLOBAL.api;
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  product(body){
    const json = JSON.stringify(body);
    return this._http.post(this.api+'/product',json,{headers: this.headers});
  }


}
