export function RestScreen() {
  return (
    <div className="rest-screen">
      <span style={{ fontSize: 64 }}>😴</span>
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 32,
          color: "#333",
          letterSpacing: 3,
        }}
      >
        DIA DE DESCANSO
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#444",
          fontSize: 14,
          textAlign: "center",
          maxWidth: 260,
        }}
      >
        Recuperação é parte do treino. Durma bem, hidrate-se e coma bem! 💧
      </p>
    </div>
  );
}
