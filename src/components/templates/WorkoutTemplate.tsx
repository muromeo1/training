import { Header } from "../organisms/Header";
import { PlanSwitcher } from "../organisms/PlanSwitcher";
import { DaySelector } from "../organisms/DaySelector";
import { DayTitle } from "../organisms/DayTitle";
import { RestScreen } from "../organisms/RestScreen";
import { MuscleGroupCard } from "../organisms/MuscleGroupCard";
import { VolumeChip } from "../atoms/VolumeChip";
import { Footer } from "../organisms/Footer";
import type { WorkoutPlan } from "../../types/workout";

interface WorkoutTemplateProps {
  plans: WorkoutPlan[];
  activePlanId: string;
  onSwitchPlan: (planId: string) => void;
  selectedDayIndex: number;
  onSelectDay: (index: number) => void;
}

export function WorkoutTemplate({
  plans,
  activePlanId,
  onSwitchPlan,
  selectedDayIndex,
  onSelectDay,
}: WorkoutTemplateProps) {
  const activePlan = plans.find((p) => p.id === activePlanId)!;
  const current = activePlan.days[selectedDayIndex];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Header
        color={current.color}
        title={activePlan.title}
        subtitle={activePlan.subtitle}
      />

      {plans.length > 1 && (
        <PlanSwitcher
          plans={plans}
          activePlanId={activePlanId}
          onSwitch={onSwitchPlan}
        />
      )}

      <DaySelector
        days={activePlan.days}
        selectedIndex={selectedDayIndex}
        onSelect={onSelectDay}
      />

      <div
        style={{ padding: "0 16px 40px" }}
        key={`${activePlanId}-${selectedDayIndex}`}
        className="scroll-fade"
      >
        <DayTitle
          fullDay={current.fullDay}
          focus={current.focus}
          color={current.color}
          emoji={current.emoji}
        />

        {current.rest && <RestScreen />}

        {!current.rest && (
          <>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              {current.groups.map((g, i) => (
                <VolumeChip
                  key={i}
                  icon={g.icon}
                  muscle={g.muscle}
                  count={g.exercises.length}
                />
              ))}
            </div>

            {current.groups.map((group, gi) => (
              <MuscleGroupCard key={gi} group={group} color={current.color} />
            ))}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
