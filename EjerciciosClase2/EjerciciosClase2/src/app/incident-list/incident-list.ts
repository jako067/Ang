import { Component } from '@angular/core';
import { IncidentItem } from "../incident-item/incident-item";
import { NoticeItem } from "../notice-item/notice-item";

@Component({
  selector: 'app-incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {

  incidentArray = [ 

  ]   ;

}
