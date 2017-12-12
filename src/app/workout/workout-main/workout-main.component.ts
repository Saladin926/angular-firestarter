import { Component, OnInit } from '@angular/core';

import { CalendarEvent } from 'angular-calendar';
import { addDays, startOfDay } from 'date-fns';

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
      color: {primary: '#ad2121', secondary: '#FAE3E3'},
    },
    {
      start: startOfDay(addDays(new Date(), 1)),
      title: 'Event 2',
      color: {primary: '#1e90ff', secondary: '#D1E8FF'}
    },
    {
      start: startOfDay(new Date()),
      title: 'Event 3',
      color: {primary: '#e3bc08', secondary: '#FDF1BA'}
    }
  ];

}
