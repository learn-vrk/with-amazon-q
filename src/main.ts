import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { appReducer } from './app/store/app.reducer';
import { packagesReducer } from './app/store/packages.reducer';
import { PackagesEffects } from './app/store/packages.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ 
      app: appReducer,
      packages: packagesReducer 
    }),
    provideEffects([PackagesEffects])
  ]
});