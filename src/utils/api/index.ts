import axios from 'axios';

import { FormValues } from 'components/Form/types';

export const questionData = [
  {
    question:
      'How many licks does it take to get to the center of a tootsie roll pop?',
    questionNumber: 1,
  },
  {
    question: 'When was the U.S. civil war fought?',
    questionNumber: 2,
  },
  {
    question: 'How many times does a human heart beat in an average lifetime?',
    questionNumber: 3,
  },
  {
    question: 'How many software developers are there in the United States?',
    questionNumber: 4,
  },
];

export const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 10, name: 'Entertainment: Books' },
  { id: 11, name: 'Entertainment: Film' },
  { id: 12, name: 'Entertainment: Music' },
  { id: 13, name: 'Entertainment: Musicals & Theatres' },
  { id: 14, name: 'Entertainment: Television' },
  { id: 15, name: 'Entertainment: Video Games' },
  { id: 16, name: 'Entertainment: Board Games' },
  { id: 17, name: 'Science & Nature' },
  { id: 18, name: 'Science: Computers' },
  { id: 19, name: 'Science: Mathematics' },
  { id: 20, name: 'Mythology' },
  { id: 21, name: 'Sports' },
  { id: 22, name: 'Geography' },
  { id: 23, name: 'History' },
  { id: 24, name: 'Politics' },
  { id: 25, name: 'Art' },
  { id: 26, name: 'Celebrities' },
  { id: 27, name: 'Animals' },
  { id: 28, name: 'Vehicles' },
  { id: 29, name: 'Entertainment: Comics' },
  { id: 30, name: 'Science: Gadgets' },
  { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
  { id: 32, name: 'Entertainment: Cartoon & Animations' },
];

export const difficulties = [
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' },
];

export const amounts = [
  { id: 5, name: 5 },
  { id: 10, name: 10 },
  { id: 15, name: 15 },
  { id: 20, name: 20 },
  { id: 25, name: 25 },
  { id: 30, name: 30 },
];

// Create configured instance of axios
export const triviaAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  responseType: 'json',
});

// Example API response:
const results = [
  {
    category: 'Entertainment: Books',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?',
    correct_answer: 'Ian Fleming',
    incorrect_answers: ['Joseph Conrad', 'John Buchan', 'Graham Greene'],
  },
  {
    category: 'Entertainment: Television',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Klingons express emotion in art through opera and poetry.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
];
