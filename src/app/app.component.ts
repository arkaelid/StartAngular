import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DummyComponent } from './component/dummy/dummy.component';

@Component({
  selector: 'crm-root',
  imports: [
    RouterOutlet, 
    LoginComponent, 
    MatToolbarModule,
    DummyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Angular TUTO';

  handle(event: string): void {
    console.log('clicked:', event);
  }
}