import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { CountryComponent } from './pages/country/country.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { TableComponent } from './components/table/table.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerRegionComponent,
    CountryComponent,
    PerCountryComponent,
    TableComponent,
    InputSearchComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    PerCapitalComponent,
    PerRegionComponent,
    CountryComponent,
    PerCountryComponent,
  ],
})
export class CountriesModule {}
