interface BadgeProps {
  sets: string;
  color: string;
}

export function Badge({ sets, color }: BadgeProps) {
  return (
    <div
      className="badge"
      style={{
        background: `${color}22`,
        color: color,
        border: `1px solid ${color}44`,
        marginLeft: 12,
      }}
    >
      {sets}
    </div>
  );
}
