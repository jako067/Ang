import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-evento-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './evento-add.html',
})
export class EventoAdd {

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  @Output() add = new EventEmitter<IEvent>();

  addEvent() {
    this.add.emit({ ...this.newEvent });

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
