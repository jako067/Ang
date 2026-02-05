import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EventoService {

  private eventsEndpoint = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

    getEvents(): Observable<IEvent[]>{
      return this.http.get<IEvent[]>(this.eventsEndpoint);
    }
  
  /* Esto ahora está en el json, lo que tenemos que hacer es sacarlo de ahí usando las líneas de arriba
   
   getProducts(): IEvent[] {
    return [
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
  }*/
}
