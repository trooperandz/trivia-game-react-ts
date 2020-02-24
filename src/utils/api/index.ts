import axios from 'axios';

export const categories = [
  { id: '', name: 'Any ' },
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

export const types = [
  { id: '', name: 'Any' },
  { id: 'boolean', name: 'True / False' },
  { id: 'multiple', name: 'Multiple Choice' },
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
