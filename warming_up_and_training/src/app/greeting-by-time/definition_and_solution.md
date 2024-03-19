### Exercise: Create a Simple Angular Greeting Component

**Objective:** Build a component that displays a greeting message based on the time of day (Morning, Afternoon, Evening) to the user.


**Steps:**

1. **Generate a New Component:**
   - Use the Angular CLI to generate a new component named `greeting`.
   - Command: `ng generate component greeting` or `ng g c greeting`

2. **Modify the Component Class (`greeting.component.ts`):**
   - Add a property called `greetingMessage` to the class.
   - Calculate the current hour using `new Date().getHours()` and set `greetingMessage` to "Good Morning", "Good Afternoon", or "Good Evening" based on the current hour.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  greetingMessage: string;

  constructor() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greetingMessage = 'Good Morning';
    } else if (hour < 18) {
      this.greetingMessage = 'Good Afternoon';
    } else {
      this.greetingMessage = 'Good Evening';
    }
  }

  ngOnInit(): void {
  }
}
```

3. **Update the Component Template (`greeting.component.html`):**
   - Use interpolation to bind the `greetingMessage` property to the component's template.

```html
<h1>{{ greetingMessage }}</h1>
```

4. **Include the Component in Your App:**
   - Ensure the `GreetingComponent` is declared in a module (usually automatically done by the CLI).
   - Add the `<app-greeting></app-greeting>` selector tag in your `app.component.html` or any other template where you want the greeting to appear.
