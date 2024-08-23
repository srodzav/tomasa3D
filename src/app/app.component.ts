import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TomasaComponent } from './tomasa/tomasa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TomasaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tomasa3D';
}
