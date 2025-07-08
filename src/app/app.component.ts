import { Component } from '@angular/core';
import { PackagesListComponent } from './components/packages-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PackagesListComponent],
  template: `<app-packages-list></app-packages-list>`
})
export class AppComponent {}