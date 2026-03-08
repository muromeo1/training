import { DayDot } from "../atoms/DayDot";

interface DayButtonProps {
  label: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

export function DayButton({ label, color, isActive, onClick }: DayButtonProps) {
  return (
    <button
      className={`day-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ "--day-color": color } as React.CSSProperties}
    >
      <span className="day-label">{label}</span>
      <DayDot />
    </button>
  );
}
