import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-style',
  imports: [NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {

  fontSize=20;
  isError=false;
  selected = true;  

  cardStyle = {

  }

}
