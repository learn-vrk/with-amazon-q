import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { appReducer } from './app/store/app.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ app: appReducer })
  ]
});