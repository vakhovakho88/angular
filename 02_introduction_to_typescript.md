### Introduction to Typescript
- Typescript extends Javascript
- It is superset of javascript with extra features
- Typescript code will be compiled in Javascript
- Staticc Typing
- Javascript is dynamically typed
- typescript website: typescriptlang.org, make sure that nodejs is installed
- npm install typescript -> for locall project
- npm install -g typescript -> for globall installation
- Typescript doesnot run in the browser, thats why we need compile Typescript to javascript
- To compile typescriipt to javascript we need this command: "npx tsc <name.ts>", it needs absolute path or ts must be installed in our project
- in html we bind compiled js file and not ts



### Base Types and Primitives
- Primitive types are: boolean, number, string, null, undefined  
- More Complex Types: arrays and objects
- any is a default type, it is like var in c# we can declare variable with any, or we can let it be empty and it means any
- code examples: 02_basics
- type Inference: If we assign any value to the variable during a declaration it will automatically catch a type of it
- Union types allow us multiple types
- If we want to avvoid redundancy of type Definitions we should use Type Aliaces

### Functions and Function Types
