import { CustomerUsage } from '../entities/customer-usage.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsageService {

   constructor(private http: HttpClient) {  }

   increaseUsageAmount (customerUsage: CustomerUsage): Observable<CustomerUsage> {
      const url = `${environment.webserviceHostUrl}/throttle/usage/increase`;
      return this.http.post<CustomerUsage>(url, customerUsage, {
          headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
      });
  }

  decreaseUsageAmount (customerUsage: CustomerUsage): Observable<CustomerUsage> {
      const url = `${environment.webserviceHostUrl}/throttle/usage/decrease`;
      return this.http.post<CustomerUsage>(url, customerUsage, {
          headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
      });
  }

  removeAccount(accountNumber: string): Observable<any> {
    const url = `${environment.webserviceHostUrl}/throttle/usage/remove/${accountNumber}`;
    return this.http.delete(url);
  }

  resetAccount(accountNumber: string): Observable<any> {
    const url = `${environment.webserviceHostUrl}/throttle/usage/reset/${accountNumber}`;
    return this.http.delete(url);
  }

  getCurrentAmountUsed(accountNumber: string): Observable<CustomerUsage> {
    const url = `${environment.webserviceHostUrl}/throttle/usage/${accountNumber}`;
    return this.http.get<CustomerUsage>(url, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

}
