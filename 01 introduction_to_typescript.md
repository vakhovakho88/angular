## Introduction to TypeScript

### Overview
- TypeScript is an extension of JavaScript.
- It's a superset of JavaScript, enhancing it with additional features.
- Code written in TypeScript is compiled into JavaScript.

### Key Features
- **Static Typing**: Unlike JavaScript's dynamic typing, TypeScript allows variable types to be defined.
- **Installation**: Ensure Node.js is installed.
  - Install TypeScript for a specific project: `npm install typescript`
  - Install TypeScript globally: `npm install -g typescript`

### Compilation
- TypeScript can't run directly in browsers; it needs to be compiled to JavaScript.
- Compile using: `npx tsc <name.ts>`
  - Either provide the absolute path or ensure TypeScript is installed in your project.
- Remember to reference the compiled `.js` file in your HTML, not the `.ts` source.

### Resources
- Official TypeScript website: [typescriptlang.org](https://www.typescriptlang.org/)

---

## Base Types and Primitives

### Primitive Types
- Includes: `boolean`, `number`, `string`, `null`, `undefined`

### Complex Types
- Arrays and objects.

### The "Any" Type
- The `any` type is flexible, similar to `var` in C#. Variables can either be explicitly declared as `any` or left undeclared to infer the `any` type.

### Examples
- Refer to code samples in `02_basics`.

### Type Inference
- TypeScript can automatically determine a variable's type based on its initial value.

### Advanced Types
- **Union Types**: Allow variables to have multiple possible types.
- **Type Aliases**: Help avoid repeating type definitions, promoting cleaner code.

---

## Functions and Function Types