import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  paragraphVisible = true;

  clicksList = [];

  onButtonClick(){
    // this.clicksList.push(this.clicksList.length+1);
    this.clicksList.push(new Date());
  }
}
