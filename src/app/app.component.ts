import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'Counter App';
  timeoutHandler;
  count = 0;

  public somenumber = 10;

  jsonObj = {
    name: 'Sample name',
    age: 32
  };

  ngOnInit(): void {
  }

  increaseAge() {
   this.jsonObj.age++;
  }

  decreaseAge() {
    if (this.jsonObj.age > 0) {
      this.jsonObj.age--;
    }
  }

  public stopMouseEvent() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public incrMousedown() {
    this.timeoutHandler = setInterval(() => {
      this.increaseAge();
    }, 100);
  }

  public decMousedown() {
    this.timeoutHandler = setInterval(() => {
      this.decreaseAge();
    }, 100);
  }

}
