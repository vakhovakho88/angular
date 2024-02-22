import { Component } from '@angular/core';



export interface Task {
  id: number;
  title: string;
  completed: boolean;
}



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {
  task: Task = {
    id: 1,
    title: 'Example Task',
    completed: false
  };
  

}
