import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

export const menuHeader = [
  {
    id: 1,
    logo: <FaWhatsapp size={30} strokeWidth={1} />,
    src: 'https://wa.me/56954202618?text=Hola Daniel, ¿Como estas? Me intereso tu perfil y quisiera saber más información sobre tu experiencia como desarrollador.',
    tooltip:'WhatsApp'
  },
  {
    id: 2,
    logo: <FaLinkedin size={30} strokeWidth={1} />,
    src: 'https://www.linkedin.com/in/darav1993/',
    tooltip:'LinkedIn'
  },
  {
    id: 3,
    logo: <FaGithub size={30} strokeWidth={1} />,
    src: 'https://github.com/DanielRamosValenzuela',
    tooltip:'Github'
  },
  {
    id: 4,
    logo: <FaMailBulk size={30} strokeWidth={1} />,
    src: 'mailto: daniel.andres.ramos.v@gmail.com',
    tooltip:'Mail'
  },
];
