import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Styles from './index.module.scss';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClass?: string;
}

const Button: React.FC<ButtonProps> = ({ children, customClass, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${Styles.custom_button} ${customClass ? customClass : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
