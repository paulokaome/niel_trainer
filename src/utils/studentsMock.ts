import { StundentCardProps } from '@/components/StudentCard';

const students: StundentCardProps[] = [
  {
    studentName: 'Alice Santos',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 1, 3).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 3)),
  },
  {
    studentName: 'Bruno Oliveira',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 2).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 2)),
  },
  {
    studentName: 'Carla Mendes',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 0, 21).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 21)),
  },
  {
    studentName: 'Diego Ferreira',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 1).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 1)),
  },
  {
    studentName: 'Eduarda Lima',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 0, 19).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 19)),
  },
  {
    studentName: 'Fernando Costa',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 2).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 2)),
  },
  {
    studentName: 'Gustavo Silva',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 0, 22).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 22)),
  },
  {
    studentName: 'Helena Pereira',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 0, 23).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 23)),
  },
  {
    studentName: 'Igor Rocha',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 1, 5).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 5)),
  },
  {
    studentName: 'Juliana Costa',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 0, 28).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 28)),
  },
  {
    studentName: 'Karine Alves',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 0, 25).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 25)),
  },
  {
    studentName: 'Lucas Souza',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 0, 30).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 30)),
  },
  {
    studentName: 'Mariana Rocha',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 1, 8).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 8)),
  },
  {
    studentName: 'Nicolas Lima',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 6).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 6)),
  },
  {
    studentName: 'Olga Martins',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 0, 24).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 0, 24)),
  },
  {
    studentName: 'Paulo Fernandes',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 9).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 9)),
  },
  {
    studentName: 'Rafaela Pereira',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 1, 12).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 12)),
  },
  {
    studentName: 'Samuel Silva',
    studentStatus: false,
    courseSubscriptionDaysLeft: new Date(2025, 1, 15).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 15)),
  },
  {
    studentName: 'Tatiane Souza',
    studentStatus: true,
    courseSubscriptionDaysLeft: new Date(2025, 1, 18).toLocaleDateString(
      'pt-BR'
    ),
    daysUntilExpiration: calculateDaysUntilExpiration(new Date(2025, 1, 18)),
  },
];

// Função para calcular os dias restantes para completar 30 dias
function calculateDaysUntilExpiration(
  courseSubscriptionDaysLeft: Date
): number {
  const enrollmentDate = new Date(courseSubscriptionDaysLeft); // Data de inscrição
  const expirationDate = new Date(enrollmentDate);
  expirationDate.setDate(enrollmentDate.getDate() + 30); // Adiciona 30 dias à data de inscrição

  const today = new Date();
  const timeDiff = expirationDate.getTime() - today.getTime();
  const daysLeft = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0); // Não pode ser negativo

  return daysLeft;
}

export default students;
