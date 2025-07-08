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
  template: `
    <div class="packages-container">
      <h1>Habitat Packages</h1>
      
      <div *ngIf="loading$ | async" class="loading">Loading packages...</div>
      
      <div *ngIf="error$ | async as error" class="error">
        Error: {{ error }}
      </div>
      
      <div class="packages-grid" *ngIf="!(loading$ | async)">
        <div *ngFor="let package of packages$ | async" class="package-card">
          <h3>{{ package.name }}</h3>
          <p><strong>Origin:</strong> {{ package.origin }}</p>
          <p><strong>Version:</strong> {{ package.version }}</p>
          <p><strong>Release:</strong> {{ package.release }}</p>
          <p><strong>Maintainer:</strong> {{ package.maintainer }}</p>
          <div class="platforms">
            <span *ngFor="let platform of package.platforms" class="platform-tag">
              {{ platform }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .packages-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .package-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .package-card h3 {
      margin: 0 0 12px 0;
      color: #333;
    }
    
    .package-card p {
      margin: 4px 0;
      font-size: 14px;
    }
    
    .platforms {
      margin-top: 8px;
    }
    
    .platform-tag {
      display: inline-block;
      background: #007acc;
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      margin-right: 4px;
    }
    
    .loading, .error {
      text-align: center;
      padding: 20px;
      font-size: 16px;
    }
    
    .error {
      color: #d32f2f;
    }
  `]
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