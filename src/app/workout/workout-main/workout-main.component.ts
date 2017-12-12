import { Component, OnInit } from '@angular/core';

import { CalendarEvent } from 'angular-calendar';
import { addDays, startOfDay } from 'date-fns';

import { types } from '../workout.types'

@Component({
  selector: 'workout-main',
  templateUrl: './workout-main.component.html',
  styleUrls: ['./workout-main.component.scss']
})
export class WorkoutMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Event 1',
      color: types.legs.color,
    },
    {
      start: startOfDay(addDays(new Date(), 1)),
      title: 'Event 2',
      color: types.shoulders.color
    },
    {
      start: startOfDay(new Date()),
      title: 'Event 3',
      color: types.back.color
    }
  ];

}
