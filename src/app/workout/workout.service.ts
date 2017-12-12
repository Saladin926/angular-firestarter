import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Workout } from './workout-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class WorkoutService {
  workoutsCollection: AngularFirestoreCollection<Workout>;

  constructor(private afs: AngularFirestore) {
    this.workoutsCollection = this.afs.collection('workouts');
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

}
