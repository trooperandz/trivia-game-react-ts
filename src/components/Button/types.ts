export type ButtonType = {
  onSubmit: Function;
  type?: string;
  disabled?: boolean;
  secondary?: boolean;
  style?: {
    [key: string]: string;
  };
};
