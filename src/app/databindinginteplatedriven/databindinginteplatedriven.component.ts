import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindinginteplatedriven',
  templateUrl: './databindinginteplatedriven.component.html',
  styleUrls: ['./databindinginteplatedriven.component.css']
})
export class DatabindinginteplatedrivenComponent implements OnInit {
  citys=['mumbai','delhi','kolkata','chenai','Banglore','pune'] 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(val:string)
  {

    console.log(val)
  }

}
