import { Component, OnInit } from '@angular/core';

import { webSocket } from "rxjs/webSocket";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subject = webSocket('wss://me-test-ffefad8830b5.herokuapp.com/:443')
  //clicked:boolean =false
  constructor() { }

  ngOnInit(): void {
  }

  phone(){
    this.subject.subscribe()
    this.subject.next({"slider1":12,"slider2":12})
    this.subject.complete
    //this.clicked = true
  }
  other(){
    this.subject.subscribe()
    this.subject.next({"slider1":0,"slider2":0})
    this.subject.complete
  }
}
