type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
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
