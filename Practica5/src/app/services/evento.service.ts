import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventoService {

  private eventsEndpoint = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventsEndpoint)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      );
  }

  addEvento(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this.eventsEndpoint, event)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      );
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.delete(`${this.eventsEndpoint}/${id}`)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      );
  }
}
