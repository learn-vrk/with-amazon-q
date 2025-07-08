import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { AppState } from '../store/app.state';
import { HabitatPackage } from '../models/package.model';
import { loadPackages } from '../store/app.actions';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss']
})
export class PackagesListComponent implements OnInit {
  packages$: Observable<HabitatPackage[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.packages$ = this.store.select(state => state.packages.items);
    this.loading$ = this.store.select(state => state.packages.loading);
    this.error$ = this.store.select(state => state.packages.error);
  }

  ngOnInit() {
    this.store.dispatch(loadPackages());
  }
}