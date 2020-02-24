import { amounts, categories, types, difficulties } from '../api';

export const errorMessages = {
  firstName: 'Please enter your first name',
  amount: 'Please select an amount',
  difficulty: 'Please select a difficulty level',
};

export const initialFormValues = {
  firstName: '',
  amount: '',
  difficulty: '',
};

export const inputParams = [
  {
    label: 'First Name',
    id: 'firstName',
    name: 'firstName',
    placeholder: 'First Name',
    required: true,
  },
  {
    label: 'Number of Questions',
    id: 'amount',
    name: 'amount',
    options: amounts,
    required: true,
  },
  {
    label: 'Category',
    id: 'category',
    name: 'category',
    options: categories,
    required: false,
  },
  {
    label: 'Type',
    id: 'type',
    name: 'type',
    options: types,
    required: false,
  },
  {
    label: 'Difficulty',
    id: 'difficulty',
    name: 'difficulty',
    options: difficulties,
    required: true,
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
