import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [
    `
      button {
        margin: 10px;
      }
    `,
  ],
})
export class PerRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion = '';
  countries: Country[] = [];
  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {}

  selectRegion(region: string) {
    if (region === this.activeRegion) return;
    this.activeRegion = region;
    this.getCountryPerRegion();
  }

  getCountryPerRegion(): void {
    this._countryService.getRegion(this.activeRegion).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
