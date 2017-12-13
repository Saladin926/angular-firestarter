import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '../core/auth.service';

import { Workout, Exercises } from './workout-model';
import { User } from '../core/user-model'

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class WorkoutService {
  workoutsCollection: AngularFirestoreCollection<Workout>;
  exercisesCollection: AngularFirestoreCollection<Exercises>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.workoutsCollection = this.afs.collection('workouts');
    this.exercisesCollection = this.afs.collection('exercises');
  }

  getCurrentWorkout(): Observable<Workout | undefined> {
    return this.auth.user.map(user => user!.workout);
  }

  setUserWorkout(workout: Workout, uid: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    userRef.update({workout: workout});
  }

  getData(): Observable<Workout[]> {
    return this.workoutsCollection.valueChanges();
  }

  getSnapshot(): Observable<Workout[]> {
    // ['added', 'modified', 'removed']
    return this.workoutsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Workout;
        return { id: a.payload.doc.id, name: data.name, description: data.description, days: data.days };
      });
    });
  }

  getExercises(): Observable<Exercises[]> {
    return this.exercisesCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Exercises;
        return { id: a.payload.doc.id, name: data.name, exercises: data.exercises };
      });
    });
  }

}
