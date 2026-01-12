import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-style',
  imports: [NgStyle, NgClass],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {
  fontSize = 20;
  isError = false;
  selected = true;

  cardStyles = {
    border: 'solid',
    borderColor: this.selected ? 'blue' : 'gray',
    'borderWidth.px': '10',
  };
}
