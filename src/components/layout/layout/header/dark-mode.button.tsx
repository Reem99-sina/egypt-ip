'use client';

import { useTheme } from '@/hooks/theme.hook';
import clsx from 'clsx';

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className='flex flex-row items-center'>
      <span>{isDarkMode ? 'وضع عام' : 'وضع ليلي'}</span>

      <button
        onClick={toggleDarkMode}
        className={clsx(
          'ms-1 flex h-[19.12px] !w-[40.62px] items-center rounded-full bg-[#FBFBFB]',
          'px-[2px]',
          isDarkMode ? 'justify-start' : 'justify-end',
        )}
      >
        <div
          className={clsx('h-[16.73px] w-[16.73px] rounded-full bg-secondary1')}
        />
      </button>
    </div>
  );
};
