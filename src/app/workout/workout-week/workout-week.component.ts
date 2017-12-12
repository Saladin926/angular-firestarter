import { Component, OnInit } from '@angular/core';

import { CalendarEvent } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';

@Component({
  selector: 'workout-week',
  templateUrl: './workout-week.component.html',
  styleUrls: ['./workout-week.component.scss']
})
export class WorkoutWeekComponent implements OnInit {
  viewDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

  events: CalendarEvent[] = [];
}
