import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting-by-time',
  templateUrl: './greeting-by-time.component.html',
  styleUrls: ['./greeting-by-time.component.css'],
})
export class GreetingByTimeComponent {
  greetingMessage: string;

  constructor() {
    const hours = new Date().getHours();
    if (hours < 12) this.greetingMessage = 'Good Morning';
    else if (hours < 18) this.greetingMessage = 'Good Afternoon';
    else this.greetingMessage = 'Good Evening';
  }
}
