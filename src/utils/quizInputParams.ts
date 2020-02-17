import { amounts, categories, difficulties } from 'utils/api';

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
    options: amounts,
  },
  {
    label: 'Category',
    id: 'category',
    name: 'category',
    options: categories,
  },
  {
    label: 'Difficulty',
    id: 'difficulty',
    name: 'difficulty',
    options: difficulties,
  },
];
