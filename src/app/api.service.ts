// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  get(endpoint: string) {
    return this.http.get(`${this.baseUrl}${endpoint}`, { headers: this.getHeaders() });
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, { headers: this.getHeaders() });
  }

  put(endpoint: string, data: any) {
    return this.http.put(`${this.baseUrl}${endpoint}`, data, { headers: this.getHeaders() });
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.baseUrl}${endpoint}`, { headers: this.getHeaders() });
  }
}
