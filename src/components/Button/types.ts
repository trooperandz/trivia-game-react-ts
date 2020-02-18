export type ButtonType = {
  onSubmit: Function;
  type?: string;
  disabled?: boolean;
  styleType?: string;
  style?: {
    [key: string]: string;
  };
};
