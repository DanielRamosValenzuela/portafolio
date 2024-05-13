import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Swords,
  Nfc,
} from 'lucide-react';

export const menuNavbar = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon size={25} color='#fff' strokeWidth={1} />,
    link: '/',
  },
  {
    id: 2,
    title: 'User',
    icon: <UserRound size={25} color='#fff' strokeWidth={1} />,
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Education',
    icon: <BookText size={25} color='#fff' strokeWidth={1} />,
    link: '/education',
  },
  {
    id: 4,
    title: 'Portfolio',
    icon: <CodeSquare size={25} color='#fff' strokeWidth={1} />,
    link: '/portfolio',
  },
  {
    id: 5,
    title: 'Skills',
    icon: <Swords size={25} color='#fff' strokeWidth={1} />,
    link: '/skills',
  },
  {
    id: 6,
    title: 'Contact',
    icon: <Nfc size={25} color='#fff' strokeWidth={1} />,
    link: '/contact',
  },
];