import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  doGet(url: string, data?: any) {

    return this.http.get(environment.URL + url, { params: data ? data : {} }).toPromise();
  }
}
