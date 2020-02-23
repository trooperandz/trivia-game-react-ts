export type QuestionType = {
  viewportWidth: number;
  question: string;
  answerChoices: string[];
  onRadioChange: Function;
  selectedAnswer?: string;
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
