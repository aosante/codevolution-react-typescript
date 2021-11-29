import { ReactNode } from 'react';

type OscarProps = {
  children: ReactNode;
};

export const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};
