import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //name of comp
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  	h3 {
  		color: red;
  	}
  `]
})
export class AppComponent {
  name = 'app';
}
