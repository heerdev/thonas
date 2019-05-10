import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to homePage';
  // title2:string='sadadg';
  img='https://cdn5.vectorstock.com/i/1000x1000/33/54/futuristic-background-cyber-eye-theme-vector-20593354.jpg'
  // clickEvent(){
  //   this.title="title  has changed after click on button"
  //   console.log('click event');
  // }
  myfunction(){
    this.title="title  has changed after click on button"
  }
}
