interface PrimaryButtonProps {
  title?: string;
  loading?: boolean;
  color?: string;
  onClick?: (params: any) => any;
  logMessage?: (message: string) => void;
}

export default PrimaryButtonProps;
