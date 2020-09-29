import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {routerTransition} from './app-routing-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  title = 'Counter App';
  timeoutHandler;
  count = 0;

  private mediaSub: Subscription;

  constructor(
    private  cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe(
      (observer) => {
        console.log(observer[0].mqAlias);
        console.log(observer[0].mediaQuery);
      });

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  getState(outlet) {
    return outlet.activatedRouteData.animationState;
  }
}
