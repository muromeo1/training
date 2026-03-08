interface DayTitleProps {
  fullDay: string;
  focus: string;
  color: string;
  emoji: string;
}

export function DayTitle({ fullDay, focus, color, emoji }: DayTitleProps) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${color}22, transparent)`,
        border: `1px solid ${color}33`,
        borderRadius: 16,
        padding: "16px 20px",
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            color: "#666",
            letterSpacing: 2,
          }}
        >
          {fullDay.toUpperCase()}
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 22,
            letterSpacing: 2,
            color,
            lineHeight: 1.2,
            marginTop: 2,
          }}
        >
          {focus}
        </h2>
      </div>
      <span style={{ fontSize: 36 }}>{emoji}</span>
    </div>
  );
}
