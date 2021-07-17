import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit {
  country!: Country;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _countryService: CountryService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params
      .pipe(
        switchMap(({ id }) => this._countryService.getCountryByAlphaCode(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));

    // this._activateRoute.params.subscribe(({ id }) => {
    //   this._countryService.getCountryByAlphaCode(id).subscribe( country =>
    //       this.country = country
    //     )
    // });
  }
}
