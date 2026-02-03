import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
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
  }
}
