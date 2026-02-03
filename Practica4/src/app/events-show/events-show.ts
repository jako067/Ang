import { Component, Pipe } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search = '';

  deleteEvento(eventToDelete: IEvent) {
    this.events = this.events.filter((e) => e !== eventToDelete);
  }
  addEvent(event: IEvent) {
    this.events = [...this.events, event];
  }

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  events: IEvent[] = [];

 /* Tendría que haber llamado al Servicio, eventos*/

  constructor(private eventsService: ProductoService) {}
  ngOnInit() {
    this.events = this.eventsService.getProducts();
  }

  orderDate() {
    this.events.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  orderPrice() {
    this.events.sort((a, b) => a.price - b.price);
  }
}
