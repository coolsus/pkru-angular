import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'My Salee';
  version:Number = 9.3;
  disabled:Boolean = false;

  changeTitle(event){
    console.log(event.target.value);
    this.title = event.target.value;
    //this.title = event.key;
  }
}
