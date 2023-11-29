import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";

export const Button: FunctionComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return <button {...props}>Click me!</button>;
};
