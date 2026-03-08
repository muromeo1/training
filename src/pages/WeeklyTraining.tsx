import { useState } from "react";
import { WorkoutTemplate } from "../components/templates/WorkoutTemplate";
import { workoutDays } from "../data/workoutDays";
import { wifeWorkoutDays } from "../data/wifeWorkoutDays";
import type { WorkoutPlan } from "../types/workout";

const plans: WorkoutPlan[] = [
  {
    id: "murilo",
    label: "MURILO",
    title: "MURILO",
    subtitle: "Cada músculo estimulado 2× por semana",
    days: workoutDays,
  },
  {
    id: "wife",
    label: "JESSICA",
    title: "JESSICA",
    subtitle: "Treino focado em perna, peito/ombro/tríceps e costas/bíceps",
    days: wifeWorkoutDays,
  },
];

export default function WeeklyTraining() {
  const [activePlanId, setActivePlanId] = useState(plans[0].id);
  const [selectedDay, setSelectedDay] = useState(0);

  const handleSwitchPlan = (planId: string) => {
    setActivePlanId(planId);
    setSelectedDay(0);
  };

  return (
    <WorkoutTemplate
      plans={plans}
      activePlanId={activePlanId}
      onSwitchPlan={handleSwitchPlan}
      selectedDayIndex={selectedDay}
      onSelectDay={setSelectedDay}
    />
  );
}
