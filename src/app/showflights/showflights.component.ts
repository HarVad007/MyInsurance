import { Component, OnInit } from '@angular/core';
import{flight}from './flight';

@Component({
  selector: 'app-showflights',
  templateUrl: './showflights.component.html',
  styleUrls: ['./showflights.component.css']
})
export class ShowflightsComponent implements OnInit {

  title: string='showing all flights';

  flightName: string="Indian Airlines";
  flightNumber: number=100;
  flightSource: string="Mumbai";
  flightTarget: string="Paris";
  
  flightObj: flight=new flight();

  constructor() { }

  ngOnInit(): void {
  }

}
