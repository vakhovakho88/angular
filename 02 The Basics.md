### How an Angular App Gets Loaded and Started

- **Code Structure**: 
  - It's essential to understand Angular's code structure.
- **Initial File**: 
  - The server primarily serves the `index.html` file, with its main root HTML element being `<app-root></app-root>`.
- **Key Component**: 
  - The core mechanism is encapsulated in `app.component.ts`.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

- **Selector Role**: 
  - The `selector` identifies the `'app-root'` HTML tag and replaces it with content from `./app.component.html`.
- **Execution Entry Point**: 
  - The application's starting point is `main.ts`.


## Why are Components Important?

- **Modularity**: 
  - _Breaks UI_ into small, easy-to-manage chunks.
  
- **Reusability**: 
  - Use components multiple times, avoiding redundant work.

- **Isolation**: 
  - Each component stands alone, minimizing bugs from overlaps.

- **Encapsulation**: 
  - Keeps internal details hidden, ensuring safer usage.

- **Testability**: 
  - Test one component without involving the whole app.

- **Consistency**: 
  - Components make sure every part of your app looks and feels the same to the user.

- **Efficiency**: 
  - Enables advanced features like _lazy loading_.

In essence, components make Angular apps more organized, consistent, and efficient.


## Creating a New Component

### Folder Structure:
- Create a new folder inside the `app` directory.
- Ensure the folder's name matches the component's name.
  - For this example, the folder's name is `server`.

### Component Basics:
- A component is essentially a TypeScript class.
  - The file is named `server.component.ts`.
  - The component's name is `ServerComponent`.
- Components require the `@Component` decorator, which should be imported from `'@angular/core'`.

### Standard Component Structure:
Components typically consist of the following files:
   - `.ts`: Contains the component's logic.
   - `.html`: Defines the component's visual layout or template.
   - `.css`: Holds the component's styles.
   - `.spec.ts`: Used for writing tests for the component.

### Example of `server.component.ts`:
```typescript
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

}
```


## Explanation of `selector` and `templateUrl`

### 1. `selector`
- **What is it?** 
  - A custom HTML tag for the component.
- **Usage**: 
  - Whenever you add `<app-server></app-server>` in an HTML template, Angular will render the `ServerComponent` in its place.

### 2. `templateUrl`
- **What is it?** 
  - A path to the component's visual layout (an HTML file).
- **Purpose**: 
  - Defines the visual appearance of the `ServerComponent`, as specified in `server.component.html`.


## Angular Modules: A Simple Overview

Angular modules act as containers for different sections of your application.

1. **Definition**: 
   - A module groups together components, services, and other Angular essentials.

2. **Root Module**: 
   - Every Angular app starts with a primary module, typically named `AppModule`.

3. **Feature Modules**: 
   - Separate modules can be created for specific functionalities or user features.

4. **Imports/Exports**: 
   - Modules can borrow features from other modules (`imports`) and share their features with them (`exports`).

5. **Lazy Loading**: 
   - Certain modules can be set to load only when they're needed, improving initial app speed.

6. **Providers**: 
   - These offer services that can be used across the app.

In short, modules in Angular help maintain order and organization by bundling related functionalities together.


## Appmodule and Component Declaration
### Overview
`app.module.ts` serves as the primary configuration file for an Angular application.

### Importance
- **Central Registration**: It's like the table of contents for your Angular app.
- **Recognition**: By registering your component here, you inform Angular about its existence.

### Consequences
- If a component isn't listed in `app.module.ts`:
  - Angular remains unaware of it.
  - The component can't be utilized in your templates.

### Conclusion
For Angular to recognize and use your component, it must be registered in the `app.module.ts` file.


## Modifications in `app.modules.ts`

For our example, we've included the following in `app.modules.ts`:

```typescript
...
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
   ...
    ServerComponent,
  ],
...
```

## Utilizing Custom Components

- The file of interest: `app.component.html`
- `app-server` acts as the selector for our custom component:

```html
<h3>I am in the AppComponent</h3>
<hr>
<app-server></app-server>
```

## Component Generation using the CLI

- Use the following commands to generate components:
  - `ng generate component <name>`
  - Short form: `ng g c <name>`

## Working with Component Templates

- Instead of separate HTML files, inline templates can be employed.
  - Switch `templateUrl` to `template` in the `component.ts` file.
  
Single line inline template:

```typescript
@Component({
  selector: 'app-servers',
  template: "<app-server></app-server>",
  styleUrls: ['./servers.component.css']
})
```

For multi-line HTML:

```typescript
@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
```

## Handling Component Styles

- A reminder: We're utilizing Bootstrap in this project.
- For custom styling tweaks, modify the respective CSS files.
- Multiple stylesheets can be referenced since `styleUrls` is an array, e.g., `styleUrls: ['./servers.component.css', './test.css']`.
  
Using inline styles:

```typescript
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`h3 { color: blue; }`]
})
```



## Angular Components & Selectors

### Components:
- **Template**: The view (e.g., `templateUrl: './app.component.html'`)
- **Styles**: CSS (e.g., `styleUrls: ['./app.component.css']`)
- **Selector**: How Angular identifies the component in the template.

### Selector Types with Examples:

1. **Element Selector**:
   - Defined as: `'app-servers'`
   - Used in HTML as: 
     ```html
     <app-servers></app-servers>
     ```

2. **Attribute Selector**:
   - Defined as: `'[app-servers]'`
   - Used in HTML as: 
     ```html
     <div app-servers></div>
     ```

3. **Class Selector**:
   - Defined as: `'.app-servers'`
   - Used in HTML as: 
     ```html
     <div class="app-servers"></div>
     ```

### Notes:
- **Unique Selectors**: Avoid overwriting existing components/elements.
- **Unsupported**: Angular doesn't support ID or pseudo selectors (e.g., `:hover`).
- **Common Usage**: For components, the element selector style (`app-servers`) is most typical.



## Angular Data Binding Reference

### Overview:
- Components in Angular serve as base building blocks.
- To make applications dynamic beyond static content, **Data Binding** is used.
- Data binding bridges communication between a component's TypeScript logic and its HTML template.

### Types of Data Binding:

1. **String Interpolation**:
   - Output data from TypeScript in the template.
   - Syntax: `{{ propertyNameOrExpression }}`.
   - Example:
     ```typescript
     title = 'Hello World';
     ```
     In HTML:
     ```html
     <h1>{{ title }}</h1> <!-- Outputs: Hello World -->
     ```

2. **Property Binding**:
   - Dynamically update HTML properties using TypeScript values.
   - Syntax: `[property]="value"`.
   - Example:
     ```typescript
     myLink = 'https://www.example.com';
     ```
     In HTML:
     ```html
     <a [href]="myLink">Visit Example</a>
     ```

3. **Event Binding**:
   - React to user events and execute TypeScript logic.
   - Syntax: `(event)="method()"`.
   - Example:
     ```typescript
     onClick() {
       alert('Button clicked!');
     }
     ```
     In HTML:
     ```html
     <button (click)="onClick()">Click Me</button>
     ```

4. **Two-Way Data Binding**:
   - Bidirectional link between the component logic and displayed content.
   - Requires `FormsModule` and uses `[(ngModel)]`.
   - Example:
     ```typescript
     userInput = '';
     ```
     In HTML:
     ```html
     <input [(ngModel)]="userInput">
     <p>You entered: {{ userInput }}</p>
     ```

### Key Takeaways:
- Data binding enables interaction and dynamic display in Angular applications.
- Each form provides specific ways to manage the relationship between the logic and the template.



## Angular String Interpolation Reference

### Overview:
- **String Interpolation** allows you to insert dynamic data into your template.
- It uses double curly braces `{{ }}` as its syntax.

### Key Features:
- You can embed TypeScript expressions within `{{ }}`.
- The expressions should eventually resolve to a string or a type that can be easily converted to a string.

### Examples:

1. **Property Output**:
   
   In TypeScript:
   ```typescript
   serverId: number = 10;
   serverStatus: string = 'offline';
   ```

   In HTML:
   ```html
   <p>Server with ID {{ serverId }} is {{ serverStatus }}</p>
   ```

   Output:
   ```plaintext
   Server with ID 10 is offline
   ```

2. **Calling Methods**:

   In TypeScript:
   ```typescript
   serverStatus: string = 'offline';

   getServerStatus() {
       return this.serverStatus;
   }
   ```

   In HTML:
   ```html
   <p>Server is {{ getServerStatus() }}</p>
   ```

   Output:
   ```plaintext
   Server is offline
   ```

### Notes:
- Despite `serverId` being a number, it's successfully used with string interpolation because numbers can be auto-converted to strings.
- Besides properties, functions can also be called inside the interpolation braces.
- Multiline expressions or block expressions (like `if` or `for`) are not allowed inside string interpolation. Ternary expressions are allowd.




Certainly!

### Property Binding in Angular:

Property binding is a one-way data binding technique in Angular where data from a component's class is bound to a property of a DOM element or Angular component.

**Syntax**: `[property]="data"`

Using your code:

**servers.component.html**:
```html
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
```
The `disabled` property of the button is bound to the negated value of `allowNewServer`. When `allowNewServer` is `false`, the button is disabled.

**servers.component.ts**:
```typescript
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }
}
```
Here, `allowNewServer` is initially `false`, so the button starts as disabled. After 2 seconds, it becomes `true`, enabling the button due to property binding. 

### Conclusion:
Property binding automatically updates the view when the component's data changes, ensuring a dynamic and responsive UI.



## Git Reference: Property Binding vs. String Interpolation in Angular

### Definitions:
- **Property Binding**: Binds component's property to a DOM element's property: `[property]="componentProperty"`.
- **String Interpolation**: Outputs data from the component directly into the template: `{{ data }}`.

### Examples:
1. **String Interpolation**:
   ```html
   {{ allowNewServer }}
   ```
   Displays value of `allowNewServer`.

2. **Property Binding**:
   ```html
   <span [innerText]="allowNewServer"></span>
   ```
   Sets inner content of `<span>` to the value of `allowNewServer`.

### Key Points:
- Use string interpolation for displaying data.
- Use property binding to set DOM properties.
- Don't mix the two: Avoid `[property]="{{ componentProperty }}"`.





# Git Personal Reference - Angular Event Binding

## Overview
Event binding in Angular allows reacting to user events such as clicks. 

## Basic Syntax
- **Event Binding**: `(eventName)="expression"`

## Example

React when a button is clicked:

1. **HTML Template**:
```html
<button (click)="onCreateServer()">Create Server</button>
<p>{{ serverCreationStatus }}</p>
```

2. **Component TypeScript**:
```typescript
export class AppComponent {
    serverCreationStatus = 'No server was created';

    onCreateServer() {
        this.serverCreationStatus = 'Server was created'; 
    }
}
```

### Explanation
- `(click)` binds to the button's click event. It triggers the `onCreateServer` method when clicked.
- `serverCreationStatus` updates when the button is clicked, displaying a new message.

## Additional Points
- Method naming with "on" (like `onCreateServer`) is a convention to indicate it's triggered from a template.
- Bind to any available HTML event by using the event name in the binding: `(click)`, `(mouseenter)`, etc.
- It's cleaner to call a method from the component rather than place inline code in the event binding.

## Key Takeaways
- Use parentheses `()` for event binding.
- Specify the method or code to execute inside double quotes.
- Utilize component methods for better separation of logic.



# Git Personal Reference - Angular Event Binding and Two-way Data Binding

## Overview
Angular offers robust event binding to capture user interactions and two-way data binding for syncing the view with the component's state.

## Event Binding
- It lets you bind to DOM events like `click` or `input`.
- Use the `(eventName)="expression"` syntax.

### Accessing Event Data
- `$event` is a reserved word in Angular templates that refers to the emitted event data.
- For input elements, `$event.target.value` can be used to capture the typed value.

#### Example:

```html
<!-- Event binding on input -->
<input (input)="onUpdateServerName($event)" class="form-control">
<!-- Displaying server name -->
<p>{{ serverName }}</p>
```

```typescript
export class AppComponent {
    serverName = '';

    onUpdateServerName(event: Event) {
        // Type casting for TypeScript to recognize .value property
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
```

## Two-way Data Binding
Two-way data binding allows for dynamic updates between the view and the component state. 

- Use `[(ngModel)]="propertyName"`. Note: Ensure you've imported `FormsModule` from `@angular/forms`.

### Example:

Instead of manually capturing the value as shown above, you can use:

```html
<input [(ngModel)]="serverName" class="form-control">
```

Now, `serverName` will be automatically updated with any changes in the input value and vice versa.

## Key Takeaways:
- Use `(eventName)` for event binding.
- `$event` lets you access event data.
- Two-way data binding provides a seamless sync between the view and component's state.




# Git Personal Reference - Angular Two-Way Binding

## Overview
Two-way binding in Angular combines both property and event binding, allowing automatic synchronization between the view and the component's state.

## FormsModule Requirement
For two-way binding to work:
1. `FormsModule` must be imported.
2. Add `FormsModule` to the `imports[]` array in the `AppModule`.

**Example**:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [FormsModule],
  ...
})
```

## Two-Way Binding Syntax
Use a combination of square brackets `[]` and parentheses `()` with the `ngModel` directive.

```html
<input [(ngModel)]="serverName">
```

### Behavior:
- If the value of `serverName` changes in the component, it will update in the input view.
- If the input value changes, it will update the value of `serverName` in the component.

### Illustration:
1. If `serverName` is initially set to "test server" in the component, the input will be pre-populated with "test server".
2. Typing into the input will update the `serverName` property in real-time.

## Key Takeaways:
- Two-way binding offers bidirectional data sync.
- Use the `[(ngModel)]` syntax for two-way binding.
- Ensure `FormsModule` is imported for it to work.
- It simplifies the code by eliminating the need for manual event listeners to update component properties.


