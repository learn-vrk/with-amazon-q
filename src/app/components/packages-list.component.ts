import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { AppState } from '../store/app.state';
import { HabitatPackage } from '../models/package.model';
import { loadPackages } from '../store/app.actions';

/**
 * Component for displaying Habitat packages in a Kendo UI grid
 * Provides sorting, filtering, and pagination functionality
 */
@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [CommonModule, GridModule, IndicatorsModule],
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss']
})
export class PackagesListComponent implements OnInit {
  /** Observable stream of Habitat packages */
  packages$: Observable<HabitatPackage[]>;
  /** Observable stream of loading state */
  loading$: Observable<boolean>;
  /** Observable stream of error messages */
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    // Select data streams from NgRx store
    this.packages$ = this.store.select(state => state.packages.items);
    this.loading$ = this.store.select(state => state.packages.loading);
    this.error$ = this.store.select(state => state.packages.error);
  }

  /** Initialize component and trigger package loading */
  ngOnInit() {
    this.store.dispatch(loadPackages());
  }
}