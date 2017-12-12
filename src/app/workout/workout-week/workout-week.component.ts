import { Component, OnInit, Input } from '@angular/core';

import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'workout-week',
  template: `
    <mwl-calendar-week-view
      [viewDate]="viewDate"
      [events]="events">
    </mwl-calendar-week-view>
  `,
  styleUrls: ['./workout-week.component.scss']
})
export class WorkoutWeekComponent implements OnInit {
  viewDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

  @Input() events: CalendarEvent[];
}
