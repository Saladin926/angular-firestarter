export interface Exercise {
	name: string;
	type: string;
}

export interface Exercises {
   id?: string;
   name: string;
   exercises: Exercise[];
}

export interface WorkoutDays {
	[key: string]: Exercise[];
}

export interface Workout {
  name: string;
  description: string;
  days?: WorkoutDays;
}
