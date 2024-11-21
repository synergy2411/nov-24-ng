import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  interval,
  take,
  filter,
  map,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 1500);
    setTimeout(() => {
      observer.next('Third Package');
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Something went wrong'));
    }, 4000);
    setTimeout(() => {
      observer.next('Fourth Package');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

  unSub$!: Subscription;

  interval$ = interval(500);

  onSubscribe() {
    // this.interval$
    //   .pipe(
    //     take(5),
    //     filter((value) => value % 2 === 0),
    //      tap(val => console.log(val))
    //     map((val) => val * 2)
    //   )
    //   .subscribe(
    //     (data) => console.log(data),
    //     (err) => console.error(err),
    //     () => console.log('COMPLETED')
    //   );
    this.unSub$ = this.obs$.subscribe({
      next: (data) => {
        console.log('DATA : ', data);
      },
      error: (err) => console.error(err),
      complete: () => console.log('COMPLETED'),
    });
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }

  constructor() {}

  ngOnInit(): void {
    // let subject = new ReplaySubject(2);
    let subject = new BehaviorSubject(101);
    subject.next(102);
    subject.subscribe((data) => console.log('Sub 1: ', data)); //102
    subject.next(103);
    subject.next(104);
    subject.subscribe((data) => console.log('Subs 2 : ', data)); //104
    subject.next(105);
    subject.complete();
  }
}
