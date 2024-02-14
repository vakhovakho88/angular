// Importing the necessary component decorator from Angular core
import { Component } from '@angular/core';

@Component({
  // Selector defines how this component is used in other templates
  selector: 'app-greeting',
  // Template URL specifies the HTML template for this component
  templateUrl: './greeting.component.html',
  // Style URLs link to external CSS styles for this component
  styleUrls: ['./greeting.component.css'],
})
// Define the GreetingComponent class
export class GreetingComponent {
  name = ''; // This will hold the value entered in the input field
  greeting = ''; // This will hold the greeting message

  // This method will be called when the button is clicked
  showGreeting() {
    this.greeting = `Hello, ${this.name}!`;
  }

  fieldIsempty = true;
  getColor() {
    return this.fieldIsempty ? 'red' : 'green';
  }

}