'use client';

import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { LuOctagonX } from 'react-icons/lu';
import { TbLoader2 } from 'react-icons/tb';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme}
      className='toaster group'
      icons={{
        success: <FaCheckCircle className='size-4' />,
        info: <FaInfoCircle className='size-4' />,
        warning: <FaExclamationTriangle className='size-4' />,
        error: <LuOctagonX className='size-4' />,
        loading: <TbLoader2 className='size-4 animate-spin' />,
      }}
      style={{
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-foreground)',
        '--normal-border': 'var(--border)',
        '--border-radius': 'var(--radius)',
      }}
      {...props}
    />
  );
};

export { Toaster };
