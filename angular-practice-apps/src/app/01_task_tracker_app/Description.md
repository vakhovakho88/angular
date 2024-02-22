
**Angular Exercise: Task Tracker Application**

**Objective:** Develop a Task Tracker application that allows users to view a list of tasks and mark them as completed. This exercise will help you practice Angular components, TypeScript for defining the task model, and data binding for updating the UI in response to user actions.

**Features to Implement:**

1. **Task Model:**
   - Use TypeScript to define a `Task` model with at least three properties: `id` (number), `title` (string), and `completed` (boolean).

2. **Task List Component:**
   - Create a `TaskListComponent` that displays tasks. Each task should show its title and a checkbox to mark it as completed.
   - Initialize an array of tasks within the component class, using the `Task` model.

3. **Data Binding:**
   - Use property binding to display task titles.
   - Use two-way binding with the `[(ngModel)]` directive to bind the checkbox state to each task's `completed` property. Note: You'll need to import `FormsModule` in your app module to use `ngModel`.

4. **Event Binding:**
   - Implement a button to add a new task. Use event binding to react to the button click, adding a new task to the list.

5. **Styling:**
   - Apply CSS to style the task list. Highlight completed tasks using a different color or font style to visually distinguish them.

**Steps:**

1. **Project Setup:** Initialize a new Angular project using the Angular CLI.
2. **Model Definition:** Create a TypeScript interface or class named `Task` in a separate file.
3. **Component Creation:** Generate a `TaskListComponent` using the CLI.
4. **Data Management:** Inside `TaskListComponent`, define an array of tasks with sample data.
5. **Template Development:** In the `TaskListComponent` template, use `*ngFor` to list the tasks, `[(ngModel)]` for checkboxes to mark tasks as completed, and a button to add new tasks.
6. **Event Handling:** Implement the method in your component class to handle adding new tasks and toggling their completed state.
7. **Apply Styles:** Style your task list using CSS, ensuring completed tasks are visually distinct.

This exercise aims to solidify your understanding of Angular's core concepts through the creation of a simple yet functional application. It offers practice in component creation, data and event binding, and basic use of TypeScript in Angular applications, all foundational skills for an Angular developer.