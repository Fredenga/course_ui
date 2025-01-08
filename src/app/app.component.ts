import { Component } from '@angular/core';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { HomeComponent } from './components/core/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'course-ui';
}
