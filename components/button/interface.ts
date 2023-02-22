interface ButtonProps {
  label: string;
  backgroundColor: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  radius?: string;

  disabled?: boolean;

  onClick?: (params: any) => void;
}

export default ButtonProps;
