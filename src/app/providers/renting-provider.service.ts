import { Renter } from './../models/user';
import { UrlProviderService } from './url-provider.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RentingProviderService {

  constructor(
    private http: HttpClient,
    private urlProvider: UrlProviderService,
  ) {
  }

  createRentingDemand(renter: Renter): Observable<Renter> {
    const token: string = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    }
    return this.http.post<Renter>(this.urlProvider.serverUrl + '/rentingDemands/', renter, options);
  }

  getRentingDemands(): Observable<Renter[]> {
    const token: string = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    }
    return this.http.get<Renter[]>(this.urlProvider.serverUrl + '/rentingDemands/', options);
  }

  updateRentingDemand(renter: Renter): Observable<Renter> {
    const token: string = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    }
    return this.http.put<Renter>(this.urlProvider.serverUrl + '/rentingDemands/' + renter.id, renter, options);
  }

  deleteRentingDemand(renterId: number) {
    const token: string = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    }
    return this.http.delete<Renter>(this.urlProvider.serverUrl + '/rentingDemands/' + renterId, options);
  }

  acceptRentingDemand(renter: Renter) {
    const token: string = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    }
    return this.http.post<Renter>(this.urlProvider.serverUrl + '/leasingDemands/accept/', renter, options);
  }

}