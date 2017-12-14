import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutService } from '../workout.service';
import { Exercises, Exercise, Workout } from '../workout-model';

import { AuthService } from '../../core/auth.service';

import { days } from '../workout.days';
import { types } from '../workout.types';

@Component({
  selector: 'workout-builder',
  templateUrl: './workout-builder.component.html',
  styleUrls: ['./workout-builder.component.scss']
})
export class WorkoutBuilderComponent implements OnInit {
  @Output() onFinished = new EventEmitter<boolean>();

  types: any[] = types;
  currentType: string;
  exercises: Observable<Exercises[]>;
  days: string[] = days;
  currentDay: number = 0;
  newWorkout: Workout = { name: '', description: '', days: {} };
  newWorkoutObserver: Observable<Workout>;

  constructor(private workoutService: WorkoutService, public auth: AuthService) {
    this.newWorkoutObserver = workoutService.localWorkoutUpdated$;
  }

  ngOnInit() {
    this.exercises = this.workoutService.getExercises();
    this.currentType = Object.keys(types)[0];
  }

  addExercise(exercise: Exercise) {
    let day: string = this.days[this.currentDay];

    if (!this.newWorkout.days) {
      this.newWorkout.days = {};
    }

    if (!this.newWorkout.days[day]) {
      this.newWorkout.days[day] = [];
    }

    this.newWorkout.days[day].push(exercise);
    this.workoutService.updateLocalWorkout(this.newWorkout);
  }

  removeExercise(day: string, index: number) {
    if (!(this.newWorkout && this.newWorkout.days)) {
      return;
    }
    this.newWorkout.days[day].splice(index, 1);
    this.workoutService.updateLocalWorkout(this.newWorkout);
  }

  saveWorkout(uid: string) {
    this.workoutService.setUserWorkout(this.newWorkout, uid);
    this.workoutService.addWorkout(this.newWorkout);
    this.onFinished.emit(true);
  }
}
