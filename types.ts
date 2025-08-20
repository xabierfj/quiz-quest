export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  image?: string;
  explanation: string;
}

export interface QuizData {
  id: string;
  subject: string;
  questions: Question[];
}
