type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  title: string;
  type: ButtonType;
  onPress?: () => void;
};

export type {ButtonProps, ButtonType};
