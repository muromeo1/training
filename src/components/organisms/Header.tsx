interface HeaderProps {
  color: string;
  title: string;
  subtitle: string;
}

export function Header({ color, title, subtitle }: HeaderProps) {
  return (
    <div
      style={{
        position: "relative",
        padding: "40px 20px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div className="header-glow" style={{ background: color }} />
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          color: "#555",
          letterSpacing: 3,
          marginBottom: 6,
        }}
      >
        DIVISÃO SEMANAL
      </p>
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 48,
          letterSpacing: 4,
          lineHeight: 1,
        }}
      >
        <span style={{ color }}>{title}</span>
      </h1>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: "#444",
          marginTop: 6,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
