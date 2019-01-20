import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  citys=['mumbai','delhi','kolkata','chenai','Banglore','pune'] 


  constructor() { }

  ngOnInit() {
  }

}
