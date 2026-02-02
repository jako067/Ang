import { Component, EventEmitter, Output, Pipe } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-show',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  @Output() delete = new EventEmitter<void>();

  deleteEvento(){
    this.delete.emit();
  }

  search = '';

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  events: IEvent[] = [
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

  orderDate() {
    this.events.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  orderPrice() {
    this.events.sort((a, b) => a.price - b.price);
  }

  addEvent() {
    this.events.push({ ...this.newEvent });

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
  }
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
    });
  }


}
