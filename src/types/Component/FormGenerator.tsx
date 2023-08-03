export interface Field {
  label?: string;
  name: string;
  required?: boolean;
  type: FieldTypeString;
  default?: any;
  options?: { label: string; value: string | number }[];
  maxFile?: number;
  ModalComponent?: any;
  createTitle?: string;
  selectTitle?: string;
  subLabel?: string;
  disabledStyle?: boolean;
}

export interface FieldType {
  text: any;
  email: any;
  checkbox: any;
  password: any;
  number: any;
  title: any;
  radioButton: any;
  select: any;
  file: any;
  textarea: any;
  selectItems: any;
  subtitle: any
  sliser: any
  custom: any
  date: any
}
export type FieldTypeString =
  | "text"
  | "email"
  | "checkbox"
  | "password"
  | "number"
  | "title"
  | "radioButton"
  | "select"
  | "file"
  | "textarea"
  | "selectItems"
  | "subtitle"
  | "sliser"
  | "custom"
  | "date"
  ;
