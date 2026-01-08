import { Component, signal } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';
import { TextStyle } from './text-style/text-style';

@Component({
  selector: 'app-root',
  imports: [UserProfile, TextStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejerciciosClase');
}

