import { Component } from '@angular/core';

import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goals: Goal[]= [
    {id:1,name:'James'},
    {id:2,name:'Josiah'},
    {id:3, name:'James'},
    {id:4, name:'James'},
    {id:5, name:'James'},
    {id:6, name:'James'}
  ]
}
