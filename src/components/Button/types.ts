export type ButtonType = {
  onClick: Function;
  secondary?: boolean;
  dataTest?: string;
  animated?: boolean;
  [key: string]: any;
};
