interface QuizQuestion {
  id: number;
  type: 'default' | 'following-distance';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  mph?: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'default',
    question: 'Which of these is NOT factored into a stopping distance calculation?',
    options: [
      'Perception Distance',
      'Braking Distance',
      'Safety Distance',
      'Reaction Distance',
    ],
    answer: 2, // index of correct option
    explanation: 'Perception, reaction, and braking distances are all part of stopping distance calculations. Safety distance is not a real term in this context.'
  },
  {
    id: 2,
    type: 'following-distance',
    question: 'True or False? A truck traveling at 55mph in dry conditions can stop in less than a football field length (360 feet).',
    mph: 55,
    options: [
      'True',
      'False',
    ],
    answer: 1,
    explanation: 'In ideal weather conditions, you will need at least 418 feet to come to a complete stop.'
  },
  {
    id: 3,
    type: 'following-distance',
    question: 'True or False? A truck speeding at 80mph in dry conditions can stop in less than 2 football field lengths (720 feet).',
    mph: 80,
    options: [
      'True',
      'False',
    ],
    answer: 1,
    explanation: 'Remember - stopping distance increases exponentially with speed. At 80mph, you will need at a little bit more than 2 football fields to stop.'
  },
];


export default quizQuestions;
