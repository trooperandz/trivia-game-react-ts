import { ReactNode } from 'react';

export type FormField = {
  name: string;
  value: string;
};

// export type FormValues = {
//   firstName?: string;
//   amount?: string;
//   category?: string;
//   difficulty?: string;
// };

export type FormValues = {
  [key: string]: string;
};

export type FormErrors = {
  firstName?: string;
  amount?: string;
  category?: string;
  difficulty?: string;
};

export type ChildProps = {
  onFieldChange: (formfield: FormField) => void;
  // onFieldValidate: (formfield: FormField) => void;
  formValues: FormValues;
  formErrors: FormErrors;
};

export type FormType = {
  onSubmit: Function;
  children: (props: ChildProps) => ReactNode;
  initialValues: FormValues;
  validations: FormValues;
};

export interface InputType {
  id: string;
  name: string;
  label: string;
  error?: string;
  onChange: Function;
}

export type Option = string | number;

export interface SelectType extends InputType {
  options: Option[];
}

export type ValidationItems = {
  firstName: string;
  amount: string;
  category: string;
  difficulty: string;
};
