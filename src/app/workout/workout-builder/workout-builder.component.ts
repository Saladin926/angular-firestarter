import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutService } from '../workout.service';
import { Exercises, Workout } from '../workout-model';

import { days } from '../workout.days';
import { types } from '../workout.types';

@Component({
  selector: 'workout-builder',
  templateUrl: './workout-builder.component.html',
  styleUrls: ['./workout-builder.component.scss']
})
export class WorkoutBuilderComponent implements OnInit {
  types: any[] = types;
  currentType: string;
  exercises: Observable<Exercises[]>;
  days: string[] = days;
  currentDay: number = 0;
  newWorkout: Workout = { name: '', description: '', days: {} };

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.exercises = this.workoutService.getExercises();
    this.currentType = Object.keys(types)[0];
  }

  showInfo() {
    console.log(this.currentDay);
    console.log(this.newWorkout);
    console.log(this.currentType);
  }
}
