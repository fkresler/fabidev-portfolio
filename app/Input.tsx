import React from 'react';
import styles from './Input.module.scss';

type BasicInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
};

type InputProps = BasicInputProps & {
  type: 'text' | 'email';
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = BasicInputProps & {
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Input = ({ id, label, value, type, placeholder, onChange }: InputProps) => {
  return (
    <>
      <label className={styles.label} label-for={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const Textarea = ({ id, label, value, placeholder, onChange }: TextareaProps) => {
  return (
    <>
      <label className={styles.label} label-for={id}>
        {label}
      </label>
      <textarea
        className={styles.input}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
