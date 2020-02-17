/**
 * Structure for generating quiz Home form input items.
 * Ids/names map to API url param values and form errors.
 */
export const inputParams = [
  {
    label: 'First Name',
    id: 'firstName',
    name: 'firstName',
    placeholder: 'First Name',
  },
  {
    label: 'Number of Questions',
    id: 'amount',
    name: 'amount',
    options: [5, 10, 15, 20, 25, 30],
  },
  {
    label: 'Category',
    id: 'category',
    name: 'category',
    options: [
      'History',
      'Science & Nature',
      'Politics',
      'Art',
      'General Knowledge',
      'Sports',
      'Computer Science',
      'Mythology',
      'Animals',
      'Celebrities',
      'Geography',
      'Entertainment: Music',
    ],
  },
  {
    label: 'Difficulty',
    id: 'difficulty',
    name: 'difficulty',
    options: ['Easy', 'Medium', 'Hard'],
  },
];
