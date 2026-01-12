import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    path: 'https://github.com/basantashrestha055',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/basanta-raj-shrestha-2659aa278/',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.path}
            className={iconStyles}
            target='_blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
