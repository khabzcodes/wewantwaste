import { ISkip } from '@/types/skips';
import React from 'react';

type SkipsListProps = {
  skips: ISkip[];
};
export const SkipsList: React.FC<SkipsListProps> = ({ skips }) => {
  return (
    <div className='mx-auto w-full max-w-6xl py-10'>
      {skips.map((skip) => (
        <div key={skip.id}>{skip.size}</div>
      ))}
    </div>
  );
};
