import { Component, OnInit } from '@angular/core';
import { PrintConsole } from './print-console';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const a = new PrintConsole();
    a.printHello();
  }

}
