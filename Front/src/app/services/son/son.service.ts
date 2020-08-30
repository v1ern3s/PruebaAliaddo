import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Son } from '../../models/son';

@Injectable({
  providedIn: 'root'
})
export class SonService {

  constructor(private http: HttpClient) {}

  getSons(id) {
    return this.http.get(`${environment.API_URL}/son/index/${id}`);
  }

  saveSon(son: Son) {
    return this.http.post(`${environment.API_URL}/son/add`, son);
  }
}
