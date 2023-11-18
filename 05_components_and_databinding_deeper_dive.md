**Git Reference - Advancing with Components and Data Binding**

**1. Introduction**
   - Building on the basics and project setup.
   - Focusing on components and data binding.

**2. Key Objectives**
   - Learn to connect components and data binding.
   - Take a significant step forward in app development.

**3. Example Project**
   - Attached in the next lecture.
   - Enhance the project using components and data binding.

**4. Application Progress**
   - Use components and data binding to improve the app.
   - Example: Connecting components to display dynamic content.

In this guide, we highlight the importance of components and data binding in Angular app development, providing a foundation for advancing your skills. The example project will help you grasp these concepts effectively.




# 1
**Git Reference: Learning About Angular Components and Data Sharing**

- **Components**: Angular applications are built using components, which are modular building blocks. Components can be created using the Angular CLI with commands like `ng generate component`.

    Example:
    ```bash
    ng generate component cockpit
    ng generate component server-element
    ```

- **Component Splitting**: It's important to split your application into smaller components for maintainability and reusability.

- **Templates**: Each component has an associated HTML template. The template defines how the component is displayed in the application.

    Example:
    ```html
    <!-- In the cockpit.component.html -->
    <div class="row">
        <div class="col-md-6">
            <!-- Your content here -->
        </div>
    </div>
    ```

- **Two-Way Data Binding**: Data can be shared between components using two-way data binding, which allows changes in one component to be reflected in another.

- **Data Passing**: To pass data between components, use inputs and outputs. Inputs allow you to send data into a component, and outputs allow you to emit events from a component.

    Example:
    ```typescript
    // In cockpit.component.ts
    @Input() data: any;
    @Output() newData = new EventEmitter<any>();

    // In server-element.component.ts
    @Input() server: any;
    ```

- **ngFor Directive**: Use `*ngFor` to iterate over an array and generate multiple instances of a component.

    Example:
    ```html
    <!-- In app.component.html -->
    <app-server-element *ngFor="let server of serverElements"></app-server-element>
    ```

- **Parent-Child Communication**: To notify a parent component about changes in a child component, you can use output events and event emitters. This enables data sharing and synchronization.

    Example:
    ```typescript
    // In cockpit.component.ts
    this.newData.emit(newData);
    ```

This reference summarizes key points for learning about Angular components and data sharing. Components are fundamental in Angular, and proper structuring, data binding, and communication mechanisms are essential for building robust applications.


# 2
**Git Reference: Angular Data Binding**

- **Component Splitting**: Components are essential for structuring an Angular app, but data sharing between them is crucial.

- **Property and Event Binding**: In Angular, you can use property and event binding to pass data to HTML elements and receive events from them.

    Example:
    ```html
    <!-- Property Binding -->
    <button [disabled]="isDisabled">Click Me</button>

    <!-- Event Binding -->
    <input (click)="onButtonClick($event)">
    ```

- **Custom Property Binding**: You can extend this concept to your own components, binding to custom properties you define in your components.

    Example:
    ```html
    <!-- Custom Property Binding -->
    <app-custom-component [customProperty]="data"></app-custom-component>
    ```

- **Custom Event Emission**: Your components can also emit custom events, allowing other components to listen and respond.

    Example:
    ```html
    <!-- Custom Event Emission -->
    <app-custom-component (customEvent)="handleEvent($event)"></app-custom-component>
    ```

This reference highlights the key points of data binding in Angular, covering property and event binding for HTML elements and extending the same concept to custom properties and events in your Angular components.
