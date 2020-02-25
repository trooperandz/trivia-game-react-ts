export type ButtonType = {
  onSubmit: Function;
  type?: string;
  disabled?: boolean;
  secondary?: boolean;
  dataTest?: string;
  style?: {
    [key: string]: string | number;
  };
};
