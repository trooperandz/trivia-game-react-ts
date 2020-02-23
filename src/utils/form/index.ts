import { amounts, categories, difficulties } from '../api';

export const errorMessages = {
  firstName: 'Please enter your first name',
  amount: 'Please select an amount',
  category: 'Please select a category',
  difficulty: 'Please select a difficulty level',
};

export const initialErrorValues = {
  firstName: '',
  amount: '',
  category: '',
  difficulty: '',
};

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

export const getLocalStorageFormValues = () => {
  const formValues = localStorage.getItem('triviaFormValues');

  if (formValues) {
    return JSON.parse(formValues);
  }

  return undefined;
};
