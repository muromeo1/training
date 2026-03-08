import type { WorkoutDay } from "../types/workout";

export const workoutDays: WorkoutDay[] = [
  {
    day: "SEG",
    fullDay: "Segunda-feira",
    focus: "PEITO · OMBRO · TRÍCEPS",
    color: "#FF4D00",
    emoji: "💪",
    groups: [
      {
        muscle: "Peito",
        icon: "🫁",
        exercises: [
          {
            name: "Supino Reto",
            sets: "4x8-12",
            tip: "Desça a barra até o peito",
          },
          {
            name: "Supino Inclinado",
            sets: "3x10-12",
            tip: "Ângulo de 30-45°",
          },
          {
            name: "Crossover / Voador",
            sets: "3x12-15",
            tip: "Foco na contração",
          },
        ],
      },
      {
        muscle: "Ombro",
        icon: "🏋️",
        exercises: [
          {
            name: "Desenvolvimento com Halteres",
            sets: "4x10-12",
            tip: "Cotovelos alinhados",
          },
          {
            name: "Elevação Lateral",
            sets: "3x12-15",
            tip: "Polegares levemente abaixados",
          },
        ],
      },
      {
        muscle: "Tríceps",
        icon: "💪",
        exercises: [
          {
            name: "Tríceps Pulley",
            sets: "3x12-15",
            tip: "Cotovelos fixos no corpo",
          },
          {
            name: "Tríceps Francês",
            sets: "3x10-12",
            tip: "Amplitude total",
          },
        ],
      },
    ],
  },
  {
    day: "TER",
    fullDay: "Terça-feira",
    focus: "COSTAS · POSTERIOR OMBRO · BÍCEPS",
    color: "#00C2FF",
    emoji: "🔙",
    groups: [
      {
        muscle: "Costas",
        icon: "🗺️",
        exercises: [
          {
            name: "Puxada Frontal",
            sets: "4x10-12",
            tip: "Puxe até o queixo",
          },
          {
            name: "Remada Curvada",
            sets: "4x8-10",
            tip: "Peito sobre o banco",
          },
          {
            name: "Remada Unilateral",
            sets: "3x10-12",
            tip: "Amplitude máxima",
          },
        ],
      },
      {
        muscle: "Posterior de Ombro",
        icon: "🎯",
        exercises: [
          {
            name: "Crucifixo Invertido / Voador Invertido",
            sets: "3x12-15",
            tip: "Controla a descida",
          },
        ],
      },
      {
        muscle: "Bíceps",
        icon: "💪",
        exercises: [
          {
            name: "Rosca Direta com Barra",
            sets: "3x10-12",
            tip: "Cotovelos fixos",
          },
          {
            name: "Rosca Alternada com Halteres",
            sets: "3x10-12",
            tip: "Supine o punho no topo",
          },
        ],
      },
    ],
  },
  {
    day: "QUA",
    fullDay: "Quarta-feira",
    focus: "QUADRÍCEPS · POSTERIOR · ADUTORES · PANTURRILHA",
    color: "#00E86B",
    emoji: "🦵",
    groups: [
      {
        muscle: "Quadríceps",
        icon: "🦿",
        exercises: [
          {
            name: "Agachamento Livre",
            sets: "4x8-12",
            tip: "Joelhos na linha dos pés",
          },
          {
            name: "Leg Press 45°",
            sets: "4x10-12",
            tip: "Pés centralizados",
          },
          {
            name: "Cadeira Extensora",
            sets: "3x12-15",
            tip: "Segure 1 segundo no topo",
          },
        ],
      },
      {
        muscle: "Posterior de Coxa",
        icon: "🔧",
        exercises: [
          {
            name: "Mesa Flexora",
            sets: "3x12-15",
            tip: "Amplitude total",
          },
        ],
      },
      {
        muscle: "Adutores",
        icon: "⚙️",
        exercises: [
          {
            name: "Cadeira Adutora",
            sets: "3x15-20",
            tip: "Movimento controlado",
          },
        ],
      },
      {
        muscle: "Panturrilha",
        icon: "🦶",
        exercises: [
          {
            name: "Panturrilha em Pé / Leg Press",
            sets: "4x15-20",
            tip: "Amplitude total, pausa embaixo",
          },
        ],
      },
    ],
  },
  {
    day: "QUI",
    fullDay: "Quinta-feira",
    focus: "CARDIO · ABDÔMEN",
    color: "#FFD700",
    emoji: "🏃",
    groups: [
      {
        muscle: "Cardio",
        icon: "❤️",
        exercises: [
          {
            name: "Esteira / Bicicleta / Elíptico",
            sets: "30-40 min",
            tip: "Zona aeróbica moderada",
          },
        ],
      },
      {
        muscle: "Abdômen",
        icon: "⚡",
        exercises: [
          {
            name: "Crunch na Polia",
            sets: "3x15-20",
            tip: "Foco na contração do core",
          },
          {
            name: "Prancha",
            sets: "3x 45-60s",
            tip: "Respire normalmente",
          },
          {
            name: "Elevação de Pernas",
            sets: "3x15-20",
            tip: "Controla a descida",
          },
        ],
      },
    ],
  },
  {
    day: "SEX",
    fullDay: "Sexta-feira",
    focus: "PEITO · COSTAS · OMBRO · BÍCEPS · TRÍCEPS",
    color: "#FF00A8",
    emoji: "⚡",
    groups: [
      {
        muscle: "Peito",
        icon: "🫁",
        exercises: [
          {
            name: "Supino Inclinado com Halteres",
            sets: "3x10-12",
            tip: "Ênfase na parte superior",
          },
          {
            name: "Peck Deck / Crossover",
            sets: "3x12-15",
            tip: "Foco na contração",
          },
        ],
      },
      {
        muscle: "Costas",
        icon: "🗺️",
        exercises: [
          {
            name: "Remada na Máquina",
            sets: "3x10-12",
            tip: "Peito no apoio",
          },
          {
            name: "Pulldown Reto",
            sets: "3x12-15",
            tip: "Puxe com os cotovelos",
          },
        ],
      },
      {
        muscle: "Ombro",
        icon: "🏋️",
        exercises: [
          {
            name: "Elevação Lateral no Cabo",
            sets: "3x15",
            tip: "Unilateral, maior estímulo",
          },
        ],
      },
      {
        muscle: "Bíceps",
        icon: "💪",
        exercises: [
          {
            name: "Rosca Scott",
            sets: "3x10-12",
            tip: "Isolamento total",
          },
        ],
      },
      {
        muscle: "Tríceps",
        icon: "💪",
        exercises: [
          {
            name: "Extensão Testa com Halteres",
            sets: "3x10-12",
            tip: "Cotovelos apontados pro teto",
          },
        ],
      },
    ],
  },
  {
    day: "SÁB",
    fullDay: "Sábado",
    focus: "POSTERIOR · QUADRÍCEPS · GLÚTEO · PANTURRILHA",
    color: "#BF5AF2",
    emoji: "🍑",
    groups: [
      {
        muscle: "Posterior de Coxa",
        icon: "🔧",
        exercises: [
          {
            name: "Stiff com Barra",
            sets: "4x10-12",
            tip: "Sinta o alongamento",
          },
          {
            name: "Cadeira Flexora",
            sets: "3x12-15",
            tip: "Amplitude total",
          },
        ],
      },
      {
        muscle: "Quadríceps",
        icon: "🦿",
        exercises: [
          {
            name: "Hack Squat / Leg Press Fechado",
            sets: "3x10-12",
            tip: "Pés mais altos para posterior",
          },
        ],
      },
      {
        muscle: "Quadríceps + Glúteo",
        icon: "⚡",
        exercises: [
          {
            name: "Avanço / Búlgaro",
            sets: "3x10-12 cada",
            tip: "Unilateral — equilíbrio muscular",
          },
        ],
      },
      {
        muscle: "Glúteo",
        icon: "🍑",
        exercises: [
          {
            name: "Elevação Pélvica com Barra (Hip Thrust)",
            sets: "4x12-15",
            tip: "Quadril sobe totalmente",
          },
        ],
      },
      {
        muscle: "Panturrilha",
        icon: "🦶",
        exercises: [
          {
            name: "Gêmeos em Pé",
            sets: "4x15-20",
            tip: "Finaliza o treino de perna",
          },
        ],
      },
    ],
  },
  {
    day: "DOM",
    fullDay: "Domingo",
    focus: "DESCANSO",
    color: "#555",
    emoji: "😴",
    groups: [],
    rest: true,
  },
];
