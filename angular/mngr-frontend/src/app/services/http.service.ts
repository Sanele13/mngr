import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  post(endpoint,data){
    return this.http.post(endpoint,data,{headers:{'Content-Type':'application/json'}});
  }
}
