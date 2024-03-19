// toggle-text.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-text', // The component's CSS selector
  templateUrl: './toggle-text.component.html',
  styleUrls: ['./toggle-text.component.css']
})
export class ToggleTextComponent {
  // Boolean property to track the visibility of the text. Initialized to false.
  isTextVisible: boolean = false; // Use lowercase 'boolean' for primitive type

  // The constructor is used for dependency injection and complex initializations.
  // For simple property initializations, it's okay to do it inline as above.
  constructor() {}

  // Method to toggle the visibility state of the text.
  toggleTextVisibility(): void {
    this.isTextVisible = !this.isTextVisible;
  }
}
