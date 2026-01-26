import { Component, Pipe } from '@angular/core';
import {IEvent} from '../interfaces/i-event';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-show',
  imports: [TitleCasePipe, DatePipe,CurrencyPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search="";

  events: IEvent[]=[
    {
    title: 'cumple',
    image: 'minecraft.jpg',
    date: '2025-11-29',
    description: 'celebración del día en el que se llega al mundo',
    price: 10,
    },
    {    
    title: 'navidad',
    image: 'herobrine.jpg',
    date: '2025-11-30',
    description: 'celebración del día en el que jesus nació',
    price: 100,
    },

  ];

  orderDate(){
      
  }
    orderPrice(){
    

  }

}
