import { Component } from '@angular/core';
import {IEvent} from '../interfaces/i-event';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  events: IEvent[]=[
    {
    title: 'cumple',
    image: '',
    date: '2025-11-29',
    description: 'celebración del día en el que se llega al mundo',
    price: 10,
    },
    {    
    title: 'navidad',
    image: '',
    date: '2025-11-30',
    description: 'celebración del día en el que jesus nació',
    price: 100,
    },

  ];

}
