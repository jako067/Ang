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
  search = '';

  constructor(private eventoService: EventoService) {
    this.evento$ = this.eventoService.getEvents();
  }

  deleteEvento() {
    this.evento$ = this.eventoService.getEvents();
  }

  addEvent() {
    this.evento$ = this.eventoService.getEvents();
  }
}

