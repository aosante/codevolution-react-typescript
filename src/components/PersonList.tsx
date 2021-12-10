import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map(({ first, last }) => (
        <h2 key={first}>
          {first} {last}
        </h2>
      ))}
    </div>
  );
};
