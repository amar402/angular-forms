import { Component } from '@angular/core';
import {User } from './user'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics = ['angular','react','vue'];
  userData = new User('amar','se@se.com',9879879870,'vue','morning',true);
}
