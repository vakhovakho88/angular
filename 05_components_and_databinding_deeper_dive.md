# Angular Git Documentation: Components and Data Binding

## Table of Contents
1. [Module Introduction](#module-introduction)
2. [Splitting Apps into Components](#splitting-apps-into-components)
3. [Property & Event Binding Overview](#property--event-binding-overview)
4. [Binding to Custom Properties](#binding-to-custom-properties)

### Module Introduction
- **Overview**: Introduction to advancing Angular skills by diving deeper into components and data binding.
- **Goal**: Enhance an example project to utilize components and data binding for improved app architecture.

### Splitting Apps into Components
- **Concept**: Breaking down an Angular application into smaller, reusable components for better manageability and reusability.
- **Example**:
  - **Initial Scenario**: An app with a single component managing both the UI for adding servers/blueprints and displaying them.
  - **Improved Approach**: Create separate components for the "cockpit" (input area) and individual "server elements" (display area).

```typescript
// Creating a new component using Angular CLI
ng generate component cockpit --spec=false
ng generate component server-element --spec=false
```

- **Key Steps**:
  1. **Cockpit Component**: Manages user inputs for adding new servers or blueprints.
  2. **ServerElement Component**: Handles the display of individual servers or blueprints.
  3. Refactor the app component to delegate responsibilities to new components, enhancing modularity.

### Property & Event Binding Overview
- **Concept**: Data binding in Angular is a way to communicate between components. It includes property binding for passing data and event binding for listening to events.
- **Property Binding**: Used to pass data from a parent component to a child component.
- **Event Binding**: Allows components to listen to and react to events, such as user actions.

### Binding to Custom Properties
- **Concept**: Angular components can expose properties to other components, enabling a parent component to pass data to a child component.
- **Implementation**:
  - Use the `@Input()` decorator to make a property in a child component bindable from a parent component.
  - This allows data to flow from the parent component to the child component.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input() element: {type: string, name: string, content: string};
}
```

- **Example Usage**:
  - In the parent component's template, bind to the child's property:

```html
<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>
```

## Additional Insights
- **Custom Property Binding**: Essential for passing data between components, especially in large applications where components are deeply nested.
- **Event Binding**: Complements property binding by enabling child components to communicate back to their parent components through events.

## Common Questions
- **Q**: How do I decide when to create a new component?
- **A**: Consider creating a new component when you identify UI elements that are reused across the application or when a component becomes too complex and handles too many responsibilities.

- **Q**: Can I bind to custom events in child components?
- **A**: Yes, Angular allows you to emit custom events from child components using the `@Output()` decorator and `EventEmitter`, enabling parent components to listen to those events.

## Additional Resources
- [Angular Official Documentation](https://angular.io/docs)
- [Understanding Angular's Data Binding](https://angular.io/guide/data-binding)
- [Component Interaction](https://angular.io/guide/component-interaction)


To illustrate the concepts discussed in the Angular Git documentation, here are three simple examples covering components, property binding, and event binding in Angular. Each example includes a brief explanation, the necessary code snippets, and comments to enhance understanding.

### Example 1: Basic Component Creation

This example demonstrates how to create a basic component named `UserProfileComponent`. This component will display a user's profile information.

1. **UserProfileComponent** (user-profile.component.ts)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div>
      <h2>User Profile</h2>
      <p>Name: {{ userName }}</p>
      <p>Age: {{ userAge }}</p>
    </div>
  `,
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = 'John Doe';
  userAge: number = 30;
}
```

- This component uses inline templating for simplicity.
- `userName` and `userAge` are properties bound to the template for display.

### Example 2: Property Binding

This example shows how to pass data from a parent component to a child component using property binding. The child component, `UserDetailComponent`, will display details provided by the parent component, `AppComponent`.

1. **UserDetailComponent** (user-detail.component.ts)

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div>
      <h3>User Details</h3>
      <p>Email: {{ userEmail }}</p>
    </div>
  `
})
export class UserDetailComponent {
  @Input() userEmail: string; // Input property to receive data
}
```

2. **Parent Component Usage** (app.component.html)

```html
<!-- AppComponent's template -->
<app-user-detail [userEmail]="currentUserEmail"></app-user-detail>
```

```typescript
// AppComponent (app.component.ts)
export class AppComponent {
  currentUserEmail: string = 'john.doe@example.com'; // Data to pass to the child
}
```

- `@Input()` decorator in `UserDetailComponent` makes `userEmail` an input property.
- The parent component (`AppComponent`) binds the `currentUserEmail` property to the `userEmail` input of `UserDetailComponent`.

### Example 3: Event Binding

This example illustrates how to use event binding to listen for user actions in a component. It shows a button in `ActionComponent` that, when clicked, calls a method to display an alert.

1. **ActionComponent** (action.component.ts)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-action',
  template: `
    <button (click)="showAlert()">Click Me</button>
  `
})
export class ActionComponent {
  showAlert() {
    alert('Button clicked!');
  }
}
```

- The `(click)` event listener is bound to the `showAlert()` method.
- When the button is clicked, `showAlert()` is invoked, displaying an alert message.

These examples provide a practical look into creating components, using property binding to pass data down to child components, and employing event binding to react to user actions within Angular applications.



Based on the detailed transcript provided, the following Git documentation organizes and enhances the concepts discussed across the series of Angular video tutorials. This document aims to serve as a comprehensive guide and reference on custom properties, custom events, their aliasing, and the importance of component communication in Angular.

# Angular Git Documentation: Custom Properties, Events, and Component Communication

## Table of Contents
1. [Assigning Alias to Custom Properties](#assigning-alias-to-custom-properties)
2. [Binding to Custom Events](#binding-to-custom-events)
3. [Assigning an Alias to Custom Events](#assigning-an-alias-to-custom-events)
4. [Custom Property and Event Binding Summary](#custom-property-and-event-binding-summary)
5. [FAQs](#faqs)
6. [Additional Resources](#additional-resources)

### Assigning Alias to Custom Properties
- **Overview**: Angular allows you to bind parent component data to child component properties using `@Input()`. Aliases let you name the property differently outside the component.
- **Key Concept**: Use `@Input('aliasName')` to define an alias for your component property, enhancing the readability or avoiding naming conflicts.
- **Example**:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  template: `...`
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string, name: string, content: string };
}
```
- **Usage**: `<app-server-element [srvElement]="server"></app-server-element>` instead of `[element]="server"`.

### Binding to Custom Events
- **Overview**: Emit custom events from child to parent components using `@Output()` and `EventEmitter`.
- **Steps**:
  1. **Define an `EventEmitter`**: Use `@Output()` to expose an event emitter for parent components to listen to.
  2. **Emit an Event**: Use `.emit()` method with custom data.
  3. **Listen for the Event**: In the parent component, bind to the custom event and handle it with a method.

```typescript
// Child Component
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  template: `...`
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  
  onAddServer() {
    this.serverCreated.emit({ serverName: 'TestServer', serverContent: 'Just a test!' });
  }
}
```
- **Parent Component Template**: `<app-cockpit (serverCreated)="onServerAdded($event)"></app-cockpit>`.

### Assigning an Alias to Custom Events
- **Overview**: Similar to properties, custom events can also have aliases, useful for external naming conventions.
- **Implementation**:
```typescript
// Child Component with Event Alias
@Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
```
- **Usage**: `<app-cockpit (bpCreated)="onBlueprintAdded($event)"></app-cockpit>`.

### Custom Property and Event Binding Summary
- **Importance**: Custom property and event bindings are essential for component interactions, making Angular applications dynamic and modular.
- **Communication Between Components**: While `@Input()` and `@Output()` facilitate parent-child communication, Angular services offer an alternative for indirect or distant component interactions.
- **Best Practices**: Use `@Input()` and `@Output()` for direct parent-child communication. Consider services for more complex or non-linear component interactions.

### FAQs
- **Q**: When should I use an alias for `@Input()` or `@Output()`?
- **A**: Use aliases to resolve naming conflicts, improve template readability, or adhere to external naming conventions.
- **Q**: Can I emit multiple values from an `EventEmitter`?
- **A**: Yes, package the values into an object or array to emit them as a single entity.

### Additional Resources
- [Angular Official Documentation](https://angular.io/)
- [Component Interaction Guide](https://angular.io/guide/component-interaction)
- [Understanding `@Input()` and `@Output()`](https://angular.io/guide/inputs-outputs)

This documentation consolidates the key concepts from the video series into a structured and accessible format, providing clear explanations, code examples, and practical insights into Angular's component communication mechanisms.



# 02.03.2024
To demonstrate the use of `@Input()` and `@Output()` decorators in Angular, let's create three simple examples. These decorators enable component interaction in Angular applications, with `@Input()` allowing a parent component to pass data to a child component, and `@Output()` enabling a child component to send events back up to its parent.

### Example 1: Passing Data with `@Input()`

**Parent Component:**

- File: `app.component.ts`
- Purpose: Displays a message using a child component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to Angular</h1>
             <app-display-message [message]="parentMessage"></app-display-message>`,
})
export class AppComponent {
  parentMessage = 'Hello from Parent!';
}
```

**Child Component (Displaying a Message):**

- File: `display-message.component.ts`
- Purpose: Displays a message passed from the parent component.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-message',
  template: `<p>{{ message }}</p>`,
})
export class DisplayMessageComponent {
  @Input() message: string;
}
```

### Example 2: Sending Data to Parent with `@Output()`

**Child Component (Button Click):**

- File: `button-click.component.ts`
- Purpose: Emits an event when a button is clicked.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-click',
  template: `<button (click)="sendEvent()">Click Me</button>`,
})
export class ButtonClickComponent {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  sendEvent(): void {
    this.buttonClicked.emit('Button clicked!');
  }
}
```

**Parent Component:**

- File: `app.component.ts`
- Purpose: Handles the event emitted by the child component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-button-click (buttonClicked)="handleEvent($event)"></app-button-click>`,
})
export class AppComponent {
  handleEvent(message: string) {
    console.log(message);
  }
}
```

### Example 3: Combining `@Input()` and `@Output()` for Two-Way Data Binding

**Child Component (Increment and Decrement):**

- File: `counter.component.ts`
- Purpose: Allows incrementing and decrementing a value.

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      {{ count }}
      <button (click)="increment()">+</button>
    </div>
  `,
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    this.updateCount(1);
  }

  decrement() {
    this.updateCount(-1);
  }

  private updateCount(delta: number) {
    this.count += delta;
    this.countChanged.emit(this.count);
  }
}
```

**Parent Component:**

- File: `app.component.ts`
- Purpose: Uses the counter component and reacts to changes.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [count]="value" (countChanged)="value=$event"></app-counter>
    <p>Current count: {{ value }}</p>
  `,
})
export class AppComponent {
  value = 0;
}
```

These examples cover basic to intermediate use cases of `@Input()` and `@Output()`, showcasing how components can communicate in Angular applications.