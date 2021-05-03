import React from "react";
import "./ButtonComponent.scss";

export interface IButtonProps {
  variant: "primary" | "round" | "floating" | "close";
  children: JSX.Element | string;
  onClick: () => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({
  variant,
  children,
  onClick,
}) => (
  <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
    {children}
  </button>
);

export default ButtonComponent;
