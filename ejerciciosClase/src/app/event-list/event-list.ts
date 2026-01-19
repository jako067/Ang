import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import { eventFilter } from '../pipes/product-filter-pipe';
import { IEvent } from '../interfaces/ievent';

@Component({
  selector: 'app-event-list',
  imports: [FormsModule, eventFilter],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {

  searchText = '';

  events: IEvent[] = [
    { title: 'Angular Conference', date: '2026-02-10' },
    { title: 'Vue Meetup', date: '2026-03-05' },
    { title: 'React Workshop', date: '2026-04-20' },
    { title: 'Angular Advanced', date: '2026-05-01' }
  ];

}
