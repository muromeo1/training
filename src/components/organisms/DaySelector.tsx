import { DayButton } from "../molecules/DayButton";
import type { WorkoutDay } from "../../types/workout";

interface DaySelectorProps {
  days: WorkoutDay[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function DaySelector({ days, selectedIndex, onSelect }: DaySelectorProps) {
  return (
    <div style={{ padding: "0 16px 24px" }}>
      <div style={{ display: "flex", gap: 6 }}>
        {days.map((d, i) => (
          <DayButton
            key={i}
            label={d.day}
            color={d.color}
            isActive={selectedIndex === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>
    </div>
  );
}
