import { Component, signal } from '@angular/core';
import { Componente1 } from './componente1/componente1';

@Component({
  selector: 'app-root',
  imports: [Componente1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clases');
}
