import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  image="https://angular.io/assets/images/logos/angular/angular.svg";
  constructor() { }
  displayimg(){
    return this.image;
  }
  showValue(event){
    console.log(event.target.value);
  }
  ngOnInit() {
  }

}
