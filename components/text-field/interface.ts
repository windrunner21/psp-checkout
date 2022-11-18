interface TextFieldProps {
  width: number;
  placeholder?: string;
  image?: string;
  type?: string;
  maxLength?: number;
  numerical?: boolean;
  autofocus?: boolean;
  validate?: string;
  save: (params: any) => void;
  setAssociation?: (params: any) => void;
  holding?: string;
}

export default TextFieldProps;
