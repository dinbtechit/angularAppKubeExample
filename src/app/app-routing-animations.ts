import {trigger, animate, style, group, animateChild, keyframes, query, stagger, transition, sequence} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [

  transition('login => *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
      , {optional: true}),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('app => login', [
    /* order */
    /* 1 */ query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
      , {optional: true}),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
      ], {optional: true}),
    ])
  ]),
  /*transition('* => login', [
    /!* order *!/
    /!* 1 *!/ query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
      , {optional: true}),
    /!* 2 *!/ group([  // block executes in parallel
      query(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateY(0%)'}),
        /!*animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))*!/
      ], {optional: true}),
    ])
  ])*/

]);
