'use client';

import React, { useState } from 'react';
import Styles from './index.module.scss';
const TextInput = (props: {
  label?: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
}) => {
  const [show, setShow] = useState(false);

  const { label, name, type, placeholder, value } = props;

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className={Styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <span className={Styles.input_container}>
        <input
          name={name}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
        />
        {type === 'password' && (
          <button onClick={toggleShow}>{show ? 'SHOW' : 'HIDE'}</button>
        )}
      </span>
    </div>
  );
};

export default TextInput;
