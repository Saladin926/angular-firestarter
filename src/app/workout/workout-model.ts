export interface WorkoutDay {
	[index: number] : {
		name: string;
		type: string;
	}
}

export interface Workout {
  name: string;
  description: string;
  days?: {
  	[key: string]: WorkoutDay
  }
}
