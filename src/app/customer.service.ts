// src/app/customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://127.0.0.1:8000/api/customers'; 

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    const token = localStorage.getItem('jwt'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching customers:', error);
        return throwError(error);
      })
    );
  }
}
