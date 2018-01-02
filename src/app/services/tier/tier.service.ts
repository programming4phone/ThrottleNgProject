import { Tier } from '../entities/tier.model';
import { CustomerUsage } from '../entities/customer-usage.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TierService {

  constructor(private http: HttpClient) {  }

  getCustomerTierUsageAmount(accountNumber: string): Observable<CustomerUsage> {
    const url = `${environment.webserviceHostUrl}/throttle/tier/${accountNumber}`;
    return this.http.get<CustomerUsage>(url, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

  getAllTiers (): Observable<Tier[]> {
    const url = `${environment.webserviceHostUrl}/throttle/tier`;
    return this.http.get<Tier[]>(url);
  }

  addTier(speed: string, threshhold: number): Observable<any> {
    const url = `${environment.webserviceHostUrl}/throttle/tier`;
    const tier: Tier = new Tier(speed, threshhold);

    return this.http
      .put(url, tier, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

  deleteTier(speed: string): Observable<any> {
    const url = `${environment.webserviceHostUrl}/throttle/tier/delete/${speed}`;
    return this.http
      .delete(url);
  }
}
