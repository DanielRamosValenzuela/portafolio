
import { FaNetworkWired } from 'react-icons/fa';
import { GiCrossedSwords, GiGiftOfKnowledge } from 'react-icons/gi';
import { GoMail } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';
import { SiAboutdotme } from 'react-icons/si';

export const menuNavbar = [
  {
    id: 1,
    title: 'Home',
    icon: <IoHomeOutline size={25} color='#fff' strokeWidth={1} />,
    link: '/',
    tooltip: 'Inicio',
  },
  {
    id: 2,
    title: 'User',
    icon: <SiAboutdotme size={25} color='#fff' strokeWidth={1} />,
    link: '/about-me',
    tooltip: 'Trayectoria',
  },
  {
    id: 3,
    title: 'Education',
    icon: <GiGiftOfKnowledge size={25} color='#fff' strokeWidth={1} />,
    link: '/education',
    tooltip: 'Educación',
  },
  {
    id: 4,
    title: 'Portfolio',
    icon: <FaNetworkWired size={25} color='#fff' strokeWidth={1} />,
    link: '/portfolio',
    tooltip: 'Portfolio',
  },
  {
    id: 5,
    title: 'Skills',
    icon: <GiCrossedSwords size={25} color='#fff' strokeWidth={1} />,
    link: '/skills',
    tooltip: 'Herramientas',
  },
  {
    id: 6,
    title: 'Contact',
    icon: <GoMail size={25} color='#fff' strokeWidth={1} />,
    link: '/contact',
    tooltip: 'Contacto',
  },
];

export const menuNavbarEnglish = [
  {
    id: 1,
    title: 'Home',
    icon: <IoHomeOutline size={25} color='#fff' strokeWidth={1} />,
    link: '/',
    tooltip: 'Home',
  },
  {
    id: 2,
    title: 'User',
    icon: <SiAboutdotme size={25} color='#fff' strokeWidth={1} />,
    link: '/about-me',
    tooltip: 'Career',
  },
  {
    id: 3,
    title: 'Education',
    icon: <GiGiftOfKnowledge size={25} color='#fff' strokeWidth={1} />,
    link: '/education',
    tooltip: 'Education',
  },
  {
    id: 4,
    title: 'Portfolio',
    icon: <FaNetworkWired size={25} color='#fff' strokeWidth={1} />,
    link: '/portfolio',
    tooltip: 'Portfolio',
  },
  {
    id: 5,
    title: 'Skills',
    icon: <GiCrossedSwords size={25} color='#fff' strokeWidth={1} />,
    link: '/skills',
    tooltip: 'Skills',
  },
  {
    id: 6,
    title: 'Contact',
    icon: <GoMail size={25} color='#fff' strokeWidth={1} />,
    link: '/contact',
    tooltip: 'Contact',
  },
];