import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
})
export class PerCapitalComponent implements OnInit {
  error = false;
  capitals: Country[] = [];
  placeholder = 'search capital';

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {}

  onSearch(ev: string): void {
    this.error = false;
    this._countryService.getCapital(ev).subscribe(
      (capitals) => (this.capitals = capitals),
      () => {
        this.error = true;
        this.capitals = [];
      }
    );
  }

  sugerencies(ev: string) {
    this.error = false;

    console.log(ev);
  }
}
