import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges {

  appToolBarTitle = 'NS Pay';

  constructor() {
  }

  ngOnInit() {
    console.log('Toolbar init');
  }

  ngOnChanges() {
    console.log('Toolbar on changes ');
  }
}
