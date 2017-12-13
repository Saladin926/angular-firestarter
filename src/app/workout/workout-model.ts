export interface Exercise {
	name: string;
	type: string;
}

export interface WorkoutDays {
	[key: string]: Exercise[];
}

export interface Workout {
  name: string;
  description: string;
  days?: WorkoutDays;
}
