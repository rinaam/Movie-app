import React from 'react';
import './ButtonComponent.scss';

export interface IButtonProps {
    variant: 'primary' | 'round' | 'floating' | 'close';
    children: JSX.Element | string;
    onClick: () => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({
  variant,
  children,
}) => (
  <button
    type="button"
    className={`btn btn-${variant}`}
  >
    {children}
  </button>
);

export default ButtonComponent;
