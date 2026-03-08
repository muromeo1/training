import type { WorkoutDay } from "../types/workout";

export const wifeWorkoutDays: WorkoutDay[] = [
  {
    day: "SEG",
    fullDay: "Segunda-feira",
    focus: "PERNA",
    color: "#BF5AF2",
    emoji: "🦵",
    groups: [
      {
        muscle: "Mobilidade",
        icon: "🧘",
        exercises: [
          {
            name: "Mobilidade para não zuar o joelho",
            sets: "—",
            tip: "Atenção especial aos joelhos",
          },
        ],
      },
      {
        muscle: "Quadríceps",
        icon: "🦿",
        exercises: [
          {
            name: "Agachamento barra",
            sets: "4x15",
            tip: "Desça com controle",
          },
          {
            name: "Cadeira Extensora",
            sets: "4x20+15+12+falha",
            tip: "Aumentando peso a cada série",
          },
        ],
      },
      {
        muscle: "Quadríceps + Glúteo (Biset)",
        icon: "⚡",
        exercises: [
          {
            name: "Agachamento livre",
            sets: "4x10",
            tip: "Biset com afundo",
          },
          {
            name: "Afundo com peso",
            sets: "4x10",
            tip: "Passada longa para ativar glúteo",
          },
        ],
      },
      {
        muscle: "Posterior de Coxa",
        icon: "🔧",
        exercises: [
          {
            name: "Mesa Flexora",
            sets: "3x10",
            tip: "Segura 3 segundos em cada repetição",
          },
        ],
      },
      {
        muscle: "Abdução",
        icon: "🎯",
        exercises: [
          {
            name: "Abdução",
            sets: "3x15",
            tip: "Foco no glúteo médio",
          },
        ],
      },
      {
        muscle: "Glúteo + Quadríceps (Biset)",
        icon: "🍑",
        exercises: [
          {
            name: "Sumo",
            sets: "3x10",
            tip: "Biset com Leg 45°",
          },
          {
            name: "Leg 45°",
            sets: "3x15/12/falha",
            tip: "Descanso: 30s → 20s → 10s",
          },
        ],
      },
      {
        muscle: "Panturrilha",
        icon: "🦶",
        exercises: [
          {
            name: "Panturrilha sentada",
            sets: "4x15",
            tip: "Amplitude total",
          },
        ],
      },
    ],
  },
  {
    day: "TER",
    fullDay: "Terça-feira",
    focus: "COSTAS · BÍCEPS",
    color: "#00C2FF",
    emoji: "🔙",
    groups: [
      {
        muscle: "Costas",
        icon: "🗺️",
        exercises: [
          {
            name: "Puxada polia pegada aberta",
            sets: "4x15/12/10/8",
            tip: "Aumentando peso, diminuindo reps",
          },
          {
            name: "Remada baixa triângulo",
            sets: "4x15",
            tip: "Costas retas, puxe até o abdômen",
          },
          {
            name: "Remada alta",
            sets: "4x12",
            tip: "Aumentando peso a cada série",
          },
          {
            name: "Remada barra inclinada pegada supinada",
            sets: "3x15",
            tip: "Pegada invertida para ativar mais bíceps",
          },
        ],
      },
      {
        muscle: "Bíceps",
        icon: "💪",
        exercises: [
          {
            name: "Rosca Scott",
            sets: "3x15",
            tip: "Isolamento total do bíceps",
          },
          {
            name: "Rosca Martelo",
            sets: "3x12",
            tip: "Foco no braquial",
          },
        ],
      },
      {
        muscle: "Abdômen + Lombar (Biset)",
        icon: "⚡",
        exercises: [
          {
            name: "Abdômen máquina",
            sets: "3x15",
            tip: "Biset com abdominal supra",
          },
          {
            name: "Abdominal supra com os pés altos",
            sets: "3x15",
            tip: "Pés apoiados em cima do banco",
          },
          {
            name: "Lombar",
            sets: "3x12",
            tip: "Movimento controlado, sem pressa",
          },
        ],
      },
    ],
  },
  {
    day: "QUA",
    fullDay: "Quarta-feira",
    focus: "DESCANSO",
    color: "#555",
    emoji: "😴",
    groups: [],
    rest: true,
  },
  {
    day: "QUI",
    fullDay: "Quinta-feira",
    focus: "PEITO · OMBRO · TRÍCEPS",
    color: "#FF4D00",
    emoji: "💪",
    groups: [
      {
        muscle: "Ombro",
        icon: "🏋️",
        exercises: [
          {
            name: "Desenvolvimento Halter",
            sets: "4x12",
            tip: "Cotovelos alinhados",
          },
          {
            name: "Elevação Lateral + 10s finais",
            sets: "4x10",
            tip: "Segura 10 segundos isométrico no final",
          },
        ],
      },
      {
        muscle: "Peito",
        icon: "🫁",
        exercises: [
          {
            name: "Supino Inclinado Halter",
            sets: "4x12",
            tip: "Foco na parte superior do peito",
          },
          {
            name: "Crucifixo máquina",
            sets: "4x12",
            tip: "Contração no centro",
          },
          {
            name: "Flexão",
            sets: "3x12-15",
            tip: "Pode adaptar no joelho se precisar",
          },
        ],
      },
      {
        muscle: "Tríceps",
        icon: "💪",
        exercises: [
          {
            name: "Tríceps banco",
            sets: "4x12",
            tip: "Cotovelos próximos ao corpo",
          },
          {
            name: "Tríceps testa",
            sets: "4x12",
            tip: "Desça até a testa, sobe completo",
          },
        ],
      },
      {
        muscle: "Abdômen",
        icon: "⚡",
        exercises: [
          {
            name: "Prancha",
            sets: "3x40s",
            tip: "Respire normalmente",
          },
          {
            name: "Abdominal cruzado sentado com peso",
            sets: "3x15",
            tip: "Biset com prancha",
          },
        ],
      },
    ],
  },
  {
    day: "SEX",
    fullDay: "Sexta-feira",
    focus: "GLÚTEOS",
    color: "#FF69B4",
    emoji: "🦵",
    groups: [
      {
        muscle: "Mobilidade",
        icon: "🧘",
        exercises: [
          {
            name: "Mobilidade",
            sets: "—",
            tip: "Aquecer bem antes de começar",
          },
        ],
      },
      {
        muscle: "Quadríceps + Glúteo",
        icon: "🍑",
        exercises: [
          {
            name: "Búlgaro com peso",
            sets: "4x12",
            tip: "Joelho de trás quase toca o chão",
          },
          {
            name: "Leg 90° sentado",
            sets: "3x12",
            tip: "Controle a descida",
          },
          {
            name: "Cadeira Extensora",
            sets: "3x15",
            tip: "Extensão completa",
          },
        ],
      },
      {
        muscle: "Posterior de Coxa",
        icon: "🔧",
        exercises: [
          {
            name: "Cadeira Flexora unilateral",
            sets: "4x15",
            tip: "Uma perna de cada vez",
          },
          {
            name: "Stiff",
            sets: "4x15+12+10+falha",
            tip: "Descanso: 1min → 45s → 30s → 15s",
          },
        ],
      },
      {
        muscle: "Glúteo + Posterior (Biset)",
        icon: "⚡",
        exercises: [
          {
            name: "Agachamento",
            sets: "3x10",
            tip: "Biset com 4 apoios",
          },
          {
            name: "4 apoios: perna flexionada + estendida",
            sets: "3x10+10",
            tip: "10 flexionada + 10 estendida, sem descanso",
          },
        ],
      },
      {
        muscle: "Glúteo",
        icon: "🍑",
        exercises: [
          {
            name: "Elevação Pélvica",
            sets: "4x20",
            tip: "Segura 2 segundos no topo",
          },
        ],
      },
      {
        muscle: "Panturrilha",
        icon: "🦶",
        exercises: [
          {
            name: "Panturrilha máquina",
            sets: "4x20",
            tip: "Aumentando peso a cada série",
          },
        ],
      },
    ],
  },
  {
    day: "SÁB",
    fullDay: "Sábado",
    focus: "DESCANSO",
    color: "#555",
    emoji: "😴",
    groups: [],
    rest: true,
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
