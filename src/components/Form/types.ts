export type FormField = {
  name: string;
  value: string;
};

export type FormValues = {
  [key: string]: string;
};

export type FormError = {
  [key: string]: string | undefined;
};

export interface InputType {
  id: string;
  name: string;
  label: string;
  value?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  dataTest?: string;
  onChange: Function;
}

export type Option = {
  id: string | number;
  name: string | number;
};

export interface SelectType extends InputType {
  options: Option[];
}

export type ValidationItems = {
  firstName: string;
  amount: string;
  category: string;
  difficulty: string;
};
