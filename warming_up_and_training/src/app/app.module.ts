import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingByTimeComponent } from './greeting-by-time/greeting-by-time.component';
import { ToggleTextComponent } from './toggle-text/toggle-text.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    GreetingByTimeComponent,
    ToggleTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }