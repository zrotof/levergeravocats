import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor() {

    this.lat =48.107620;
    this.lng=-1.681500;
    this.zoom= 17;
    this.mapTypeId = 'hybrid';


   }
  ngOnInit(): void {
  }

}
