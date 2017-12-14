import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Workout } from '../workout-model';
import { CalendarEvent } from 'angular-calendar';

import { addDays, startOfWeek, startOfDay } from 'date-fns';

import { types } from '../workout.types';
import { days } from '../workout.days';

@Component({
  selector: 'workout-week',
  template: `
    <h2>{{workout?.name}}</h2>
    <p>{{workout?.description}}</p>
    <mwl-calendar-week-view
      [viewDate]="viewDate"
      [events]="events">
    </mwl-calendar-week-view>
  `,
  styleUrls: ['./workout-week.component.scss']
})
export class WorkoutWeekComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  private _workout: Workout | undefined;

  @Input()
  set workout(workoutObserver: Observable<Workout | undefined>) {
    workoutObserver.subscribe(workout => {
      this._workout = workout;
      this.events = [];
      
      if (!(workout && workout.days)) {
        return;
      }

      let weekStart = startOfWeek(new Date());

      for (let i = 0; i < days.length; i++) {
        if (workout.days[days[i]]) {
          for (let exercise of workout.days[days[i]]) {
            this.events.push({
              start: startOfDay(addDays(weekStart, i)),
              title: exercise.name,
              color: types[exercise.type].color,
            });
          }
        }
      }
    });
  }

  get workout(): Observable<Workout | undefined> { return this._workout; }

  constructor() { }

  ngOnInit() {
  }
}
