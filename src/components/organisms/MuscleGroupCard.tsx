import { ExerciseRow } from "../molecules/ExerciseRow";
import type { MuscleGroup } from "../../types/workout";

interface MuscleGroupCardProps {
  group: MuscleGroup;
  color: string;
}

export function MuscleGroupCard({ group, color }: MuscleGroupCardProps) {
  return (
    <div className="group-card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 18 }}>{group.icon}</span>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 18,
            letterSpacing: 2,
            color,
          }}
        >
          {group.muscle.toUpperCase()}
        </h3>
      </div>

      {group.exercises.map((ex, ei) => (
        <ExerciseRow
          key={ei}
          name={ex.name}
          sets={ex.sets}
          tip={ex.tip}
          color={color}
        />
      ))}
    </div>
  );
}
