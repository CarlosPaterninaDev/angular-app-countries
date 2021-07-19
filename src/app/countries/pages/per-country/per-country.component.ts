import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
})
export class PerCountryComponent implements OnInit {
  error = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  query = '';
  placeholder = 'search country';

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {}

  onSearch(ev: string): void {
    this.error = false;
    this._countryService.getCountry(ev).subscribe(
      (countries) => (this.countries = countries),
      () => {
        this.error = true;
        this.countries = [];
      }
    );
  }

  sugerencies(ev: string) {
    this.query = ev;
    this.error = false;

    console.log(ev);
    this._countryService.getCountry(ev).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      () => {
        this.error = true;
        this.suggestedCountries = [];
      }
    );
  }
}
