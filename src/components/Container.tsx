import { CSSProperties } from 'react';

type ContainerProps = {
  styles: CSSProperties;
};

export const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text goes here</div>;
};
