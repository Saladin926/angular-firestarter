import { Workout } from '../workout/workout-model';

export interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
  workout?: Workout;
}