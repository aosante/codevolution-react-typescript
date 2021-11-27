type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ name: { first, last } }: PersonProps) => {
  return (
    <div>
      {first} {last}
    </div>
  );
};
