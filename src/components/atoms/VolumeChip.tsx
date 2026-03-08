interface VolumeChipProps {
  icon: string;
  muscle: string;
  count: number;
}

export function VolumeChip({ icon, muscle, count }: VolumeChipProps) {
  return (
    <div className="volume-chip">
      {icon} {muscle}: <span>{count}</span> ex.
    </div>
  );
}
