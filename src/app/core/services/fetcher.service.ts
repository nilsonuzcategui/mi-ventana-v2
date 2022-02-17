import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FetcherService {
  private url = 'http://localhost:1280/api/1.0/mi-ventana';

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }

  post(endpoint: string, data: any) {
    return this.http.post(this.url + endpoint, data);
  }
}
