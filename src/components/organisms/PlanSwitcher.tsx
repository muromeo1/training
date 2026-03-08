import type { WorkoutPlan } from "../../types/workout";

interface PlanSwitcherProps {
  plans: WorkoutPlan[];
  activePlanId: string;
  onSwitch: (planId: string) => void;
}

export function PlanSwitcher({ plans, activePlanId, onSwitch }: PlanSwitcherProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        padding: "0 16px 16px",
      }}
    >
      {plans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => onSwitch(plan.id)}
          style={{
            cursor: "pointer",
            border: activePlanId === plan.id ? "1px solid #fff" : "1px solid #333",
            background: activePlanId === plan.id ? "#fff" : "#1a1a1a",
            color: activePlanId === plan.id ? "#000" : "#666",
            padding: "8px 20px",
            borderRadius: 24,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 14,
            letterSpacing: 2,
            transition: "all 0.2s",
          }}
        >
          {plan.label}
        </button>
      ))}
    </div>
  );
}
