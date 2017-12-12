import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Workout } from './workout-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class WorkoutService {

  constructor() { }

}
