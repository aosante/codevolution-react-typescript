import { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  return <input value={value} onChange={handleChange} type="text" />;
};
