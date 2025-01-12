import { FC } from 'react';

interface Props {
  color?: string;
}

export const Line: FC<Props> = ({ color }) => {
  return (
    <div
      className={'h-[1px] w-full bg-textMain'}
      style={color ? { backgroundColor: color } : {}}
    />
  );
};
