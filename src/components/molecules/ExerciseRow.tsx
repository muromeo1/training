import { Badge } from "../atoms/Badge";
import { Tip } from "../atoms/Tip";

interface ExerciseRowProps {
  name: string;
  sets: string;
  tip: string;
  color: string;
}

export function ExerciseRow({ name, sets, tip, color }: ExerciseRowProps) {
  return (
    <div className="exercise-row">
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 15, fontWeight: 500, color: "#eee" }}>{name}</p>
        <Tip text={`💡 ${tip}`} />
      </div>
      <Badge sets={sets} color={color} />
    </div>
  );
}
