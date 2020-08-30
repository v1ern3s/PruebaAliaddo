import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Father } from '../../models/father';


@Injectable({
  providedIn: 'root',
})
export class FatherService {
  constructor(private http: HttpClient) {}

  getFathers() {
    return this.http.get(`${environment.API_URL}/father/index`);
  }

  saveFather(father: Father) {
    return this.http.post(`${environment.API_URL}/father/add`, father);
  }
}
