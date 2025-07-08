import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState } from './store/app.state';
import { updateMessage } from './store/app.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>{{ message$ | async }}</h1>
      <button (click)="changeMessage()">Change Message</button>
    </div>
  `
})
export class AppComponent {
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select(state => state.app.message);
  }

  changeMessage() {
    this.store.dispatch(updateMessage({ message: 'Hello from NgRx!' }));
  }
}