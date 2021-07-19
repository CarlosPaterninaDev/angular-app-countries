import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Capital } from '../interfaces/capital.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private URL = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) {}

  get params(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  getCountry(query: string): Observable<Country[]> {
    const endpoint = `${this.URL}/name/${query}`;
    return this._http.get<Country[]>(endpoint, { params: this.params });
  }

  getCountryByAlphaCode(query: string): Observable<Country> {
    const endpoint = `${this.URL}/alpha/${query}`;
    return this._http.get<Country>(endpoint, { params: this.params });
  }

  getCapital(query: string): Observable<Capital[]> {
    const endpoint = `${this.URL}/capital/${query}`;
    return this._http.get<Capital[]>(endpoint, { params: this.params });
  }

  getRegion(region: string): Observable<Country[]> {
    const endpoint = `${this.URL}/region/${region}`;
    return this._http
      .get<Country[]>(endpoint, { params: this.params })
      .pipe(tap(console.log));
  }
}
