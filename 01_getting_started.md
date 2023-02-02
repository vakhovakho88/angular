## What ist Angular?
- Angular is a Javascript-Framework wich allows you to create reactive Single-Page-Applications (SPAs)
  - It means javascript changes DOM without refreshing a page, URL will be changed too.
- It all started with AngularJS (Angular 1)
- Complete Re-Write -> Angular 2
- Angular 2+ ... this are the versions what we are learning
- New releases every 6 Month
- But changes are now pretty minor
- The changes are every time backwardscompatible


## Project setup and First App
- We use angular CLI 
- We need actual version of NodeJS
- Run cmd as admin:
  - npm install -g @angular/cli@latest
    - -g meand globally
    - latest is optional
- Then open cmd in the folder where we want to create our angular project
  - ng new my-first-app --no-strict
    - --no-strict will be discussed later
    - without routing at the begining
    - CSS as stylesheet
- Typescreet is a superset of javascript, ts code will be compiled to js
- ng serve  -> starts local angular server from our working directory
- firstly we have complex screen
- thats we we change html file to have simple starting point
- in the folder ...\my-first-app\src\app we replace HTML (app.component.html) with an HTML file we have from udemy


## Editing the first APP
- Open our Project in Visual Studio Code
- src\packages.json are dependencies for our project
- ng serve -> makes automatically update
- Interesting folder for us is src/app
  - There is HTML -> a template for the page
  - css file
  - ts file
- We can not inspect HTML in Browser
- it will be just <app-root> tag
- app-root tag can be found in src\index.html

#### Let us make a litle page with input and paragraph with two side binding
```js
// app.component.html
// [(ngModel)]="name"  -> makes two side binding between input and variable name
<input type="text" [(ngModel)]="name">
<p>{{name}}</p>



//app.component.ts
...
export class AppComponent {
  name = 'Vakho';
}



//app.module.ts
//for the inputs
import {FormsModule} from '@angular/forms'
...
@NgModule({
  ...
  imports: [
    BrowserModule,
    FormsModule
  ]
  ...


```

#### Create new empty project
- clear app.component.html file
- remove Formsmodule imports from app.module.ts
- from app.component.ts remove everything from AppComponent
- in this course we will use bootsrap for styling: npm install --save bootstrap, it will install locally not globally
- After installation, our bootstrap directory is in node_modules located
- We should add the location in angular.json file

```js
  "styles": [
          "node_modules/bootstrap/dist/css/bootstrap.min.css",
          "src/styles.css"
        ],
```

