import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutService } from '../workout.service';
import { Workout } from '../workout-model';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  workouts: Observable<Workout[]>;
  @Output() onSelected = new EventEmitter<boolean>();

  constructor(private workoutService: WorkoutService, public auth: AuthService) { }

  ngOnInit() {
    this.workouts = this.workoutService.getData();
  }

  selectWorkout(workout: Workout, uid: string) {
    this.onSelected.emit(false);
    this.workoutService.setUserWorkout(workout, uid);
  }

  createNewWorkout() {
    this.onSelected.emit(true);
  }

}
