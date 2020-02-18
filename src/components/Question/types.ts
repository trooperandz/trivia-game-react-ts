export type QuestionType = {
  viewportWidth: number;
  onClick: Function;
  question: string;
  questionNumber: number;
  answerChoices: string[];
};

export type TriviaQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  selected_answer?: string;
};
