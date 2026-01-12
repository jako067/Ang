import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-row',
  imports: [NgClass],
  templateUrl: './status-row.html',
  styleUrl: './status-row.css',
})
export class StatusRow {
  active= true;
  enabled=false;

  rowClases={
    highlight:this.active,
    disabled:!this.enabled,
  };

}
