interface TipProps {
  text: string;
}

export function Tip({ text }: TipProps) {
  return <p className="tip">{text}</p>;
}
