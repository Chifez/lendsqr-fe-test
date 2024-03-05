'use client';

import React, { useState, ChangeEvent } from 'react';
import Styles from './index.module.scss';

interface TextInputProps {
  label?: string;
  name: string;
  type?: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // onChange(newValue);
  };

  return (
    <div className={Styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <span className={Styles.input_container}>
        <input
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        {type === 'password' && (
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </span>
    </div>
  );
};

export default TextInput;
