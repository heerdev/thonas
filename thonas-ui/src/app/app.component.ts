import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avengers - end game begins';

  subTitle =  'Awesome Angular!';

  constructor() {};

  getSubtitle(): string {
     return this.subTitle;

  }

  ngOnInit(): void {
  }

}
