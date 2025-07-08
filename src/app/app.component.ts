import { Component } from '@angular/core';
import { PackagesListComponent } from './components/packages-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PackagesListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}