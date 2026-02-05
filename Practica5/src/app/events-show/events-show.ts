import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { Observable } from 'rxjs';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css'],
})
export class EventsShow {
  evento$: Observable<IEvent[]>; 
  events: IEvent[] = [];
  search = '';
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  constructor(private eventoService: EventoService) {
    this.evento$ = this.eventoService.getEvents();
  }

  ngOnInit() {
    // Suscribirse para llenar events[]
    this.eventoService.getEvents().subscribe((data: IEvent[]) => {
      this.events = data;
    });
  }

  deleteEvento(eventToDelete: IEvent) {
    this.events = this.events.filter((e) => e !== eventToDelete);
  }

  addEvent(event: IEvent) {
    this.events = [...this.events, event];
  }

  orderDate() {
    this.events.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  orderPrice() {
    this.events.sort((a, b) => a.price - b.price);
  }
}
