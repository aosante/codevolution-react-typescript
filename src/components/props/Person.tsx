import { PersonProps } from './Person.types';

export const Person = ({ name: { first, last } }: PersonProps) => {
  return (
    <div>
      {first} {last}
    </div>
  );
};
