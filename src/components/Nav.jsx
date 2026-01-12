'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-8'>
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.path}
            className={`${
              link.path === pathname && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
