import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Capital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private URL = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) {}

  getCountry(query: string): Observable<Country[]> {
    const endpoint = `${this.URL}/name/${query}`;

    return this._http.get<Country[]>(endpoint);
  }

  getCountryByAlphaCode(query: string): Observable<Country> {
    const endpoint = `${this.URL}/alpha/${query}`;

    return this._http.get<Country>(endpoint);
  }

  getCapital(query: string): Observable<Capital[]> {
    const endpoint = `${this.URL}/capital/${query}`;

    return this._http.get<Capital[]>(endpoint);
  }
}
