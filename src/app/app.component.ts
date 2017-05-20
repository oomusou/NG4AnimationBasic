import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type MagnifierStateType = 'active' | 'inactive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('magnifier', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})
export class AppComponent {
  title = 'app works!';
  private h1state: MagnifierStateType;

  toggleState() {
    this.h1state = (this.h1state === 'active') ? 'inactive' : 'active';
  }
}
