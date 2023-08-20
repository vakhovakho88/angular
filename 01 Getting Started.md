## Introduction to Angular

### Overview
- **Definition**: Angular is a JavaScript framework for crafting reactive Single-Page Applications (SPAs).
  - In SPAs, JavaScript modifies the DOM without refreshing the entire page; even the URL can change without a page reload.

### Angular's Evolution
- It all began with AngularJS (Angular 1).
- Later, there was a complete re-write, leading to Angular 2.
- We will focus on Angular 2 and subsequent versions.
- New versions are released approximately every 6 months. 
  - However, changes in newer versions are usually minor.
  - Most importantly, updates are backward compatible.

---

## Setting Up Your First Angular Project

### Prerequisites
- Utilize the Angular CLI for ease.
- Ensure you have the latest version of NodeJS installed.

### Installation & Setup
1. Run the following command as an admin to install the Angular CLI:
  - `npm install -g @angular/cli@latest`
    - The `-g` flag installs the CLI globally.
    - Specifying `latest` is optional but ensures you're getting the most recent version.
2. Navigate to your desired directory and execute:
  - `ng new my-first-app --no-strict`
    - We'll discuss the `--no-strict` flag later.
    - Initially, we'll skip routing.
    - Choose CSS for styles.

### Key Points
- TypeScript, a superset of JavaScript, is the primary language for Angular. The TypeScript code is compiled to JavaScript.
- Run `ng serve` to initiate a local Angular development server.
- For a cleaner start, simplify the initial HTML template.
- Replace the content in `...\my-first-app\src\app\app.component.html` with a template of your choice.

---

## Editing Your First Angular App

### Navigating the Project
- Open the project using Visual Studio Code.
- Key dependencies are listed in `src\packages.json`.
- Using `ng serve` ensures your app automatically refreshes upon changes.
- The primary folder for app development is `src/app`.
  - Here, you'll find the HTML template, CSS styles, and the main TypeScript logic.

### Inspecting Your App
- Direct inspection in the browser will only display the `<app-root>` tag.
- This tag is defined in `src\index.html`.
- `app.component.ts` locates this tag and renders the associated component content.

### Basic Two-Way Binding Example

```javascript
// app.component.html
// The directive [(ngModel)] enables two-way data binding.
<input type="text" [(ngModel)]="name">
<p>{{name}}</p>

// app.component.ts
export class AppComponent {
  name = 'Vakho';
}

// app.module.ts
// Import FormsModule for input handling.
import {FormsModule} from '@angular/forms'
@NgModule({
  ...
  imports: [ BrowserModule, FormsModule ],
  ...
})
```

### Starting Fresh with a New Project
- Clear the `app.component.html` content.
- In `app.module.ts`, remove any `FormsModule` imports.
- Clear the `AppComponent` class in `app.component.ts`.
- For styling, we'll incorporate Bootstrap: `npm install --save bootstrap`.
  - Once installed, Bootstrap can be found in the `node_modules` directory.
  - Update the `angular.json` file to reflect this:

```javascript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

---

