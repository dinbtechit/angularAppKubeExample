import {AfterContentInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ToolbarComponent} from './dashboard/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit {
  title = 'Counter App';
  timeoutHandler;
  count = 0;

  public somenumber = 10;

  jsonObj = {
    name: 'Sample name',
    age: 32
  };

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`App on change fired ${changes}`);
  }

  ngAfterContentInit(): void {
    console.log('Ng after content init');
  }


  increaseAge(): void {
    this.jsonObj.age++;
  }

  decreaseAge(): void {
    if (this.jsonObj.age > 0) {
      this.jsonObj.age--;
    }
  }

  public stopMouseEvent(): void {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public incrMousedown(): void {
    this.timeoutHandler = setInterval(() => {
      this.increaseAge();
    }, 100);
  }

  public decMousedown(): void {
    this.timeoutHandler = setInterval(() => {
      this.decreaseAge();
    }, 100);
  }

  loggerConsole() {
    console.log('logger');
  }
}

function printLog() {
  console.log('This is the print log...');
}
