'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    id: 1,
    name: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'resume',
    path: '/resume',
  },
  {
    id: 3,
    name: 'projects',
    path: '/projects',
  },
  {
    id: 4,
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href={'/'}>
            <h1 className='text-4xl font-semibold'>
              Basanta<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
