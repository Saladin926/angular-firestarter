import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutService } from '../workout.service';
import { Workout } from '../workout-model';

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  workouts: Observable<Workout[]>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workouts = this.workoutService.getData();
  }

  selectWorkout(workout: Workout) {
    console.log(workout);
  }

  createNewWorkout() {
    console.log('TODO: Create new workout');
  }

}
