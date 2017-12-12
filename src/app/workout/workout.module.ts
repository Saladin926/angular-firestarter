import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { WorkoutWeekComponent } from './workout-week/workout-week.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { WorkoutMainComponent } from './workout-main/workout-main.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './workout.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
  ],
  declarations: [WorkoutWeekComponent, WorkoutMainComponent, WorkoutListComponent],
  providers: [WorkoutService],
  //providers: [WorkoutService],
})
export class WorkoutModule { }
