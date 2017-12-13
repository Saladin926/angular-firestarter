import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutService } from '../workout.service';
import { Workout } from '../workout-model';

import { types } from '../workout.types'

@Component({
  selector: 'workout-main',
  templateUrl: './workout-main.component.html',
  styleUrls: ['./workout-main.component.scss']
})
export class WorkoutMainComponent implements OnInit {
  showList: boolean = false;
  createWorkout: boolean = false;
  currentWorkout: any = null;
  workout: Observable<Workout | undefined>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workout = this.workoutService.getCurrentWorkout();
  }

  selectWorkout() {
    this.showList = true;
    this.createWorkout = false;
  }

  doWorkout(showCreate: boolean) {
    this.showList = false;
    this.createWorkout = showCreate;
  }
}
