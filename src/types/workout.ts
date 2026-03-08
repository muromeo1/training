export interface Exercise {
  name: string;
  sets: string;
  tip: string;
}

export interface MuscleGroup {
  muscle: string;
  icon: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  day: string;
  fullDay: string;
  focus: string;
  color: string;
  emoji: string;
  groups: MuscleGroup[];
  rest?: boolean;
}

export interface WorkoutPlan {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  days: WorkoutDay[];
}
