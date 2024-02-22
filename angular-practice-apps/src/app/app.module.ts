import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import the TaskTrackerComponent 01_task_tracker_app
import { TaskTrackerComponent } from './01_task_tracker_app/task-tracker.component';
import { TaskComponent } from './01_task_tracker_app/task/task.component';
import { TaskListComponent } from './01_task_tracker_app/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
