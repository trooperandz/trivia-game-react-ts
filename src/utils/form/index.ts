import { amounts, categories, types, difficulties } from '../api';

export const errorMessages = {
  firstName: 'Please enter your first name',
  amount: 'Please select an amount',
  category: 'Please select a category',
  type: 'Please select a type',
  difficulty: 'Please select a difficulty level',
};

export const initialFormValues = {
  firstName: '',
  amount: '',
  category: '',
  type: '',
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
    label: 'Type',
    id: 'type',
    name: 'type',
    options: types,
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

  return {};
};

export const unsetLocalStorageFormValues = () => {
  localStorage.removeItem('triviaFormValues');
};
