import { Book, Computer, Pencil, Rocket, ShieldHalf } from 'lucide-react';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { IEducationData, ITextData } from './interface';

export const educationData: IEducationData[] = [
  {
    icon: <ShieldHalf />,
    title: 'Título de Oficial (TI) de la FACh',
    link: './CERT_OFICIAL_TI.pdf',
    description:
      'Titulo de egreso como Oficial en Telecomunicaciones e Informática de la FACh.',
  },
  {
    icon: <Pencil />,
    title: 'Ingeniero Electrónico',
    link: './CERT_ING_ELCT.pdf',
    description:
      'Licenciado como Ingeniero Electrónico en la Academia Politécnica Aeronáutica.',
  },
  {
    icon: <Computer />,
    title: 'Desarrollo web CoderHouse',
    link: './WEB_CERT.png',
    description:
      'Realice un curso de FrontEnd completo en esta institución, este es mi certificado como desarrollado Web',
  },
  {
    icon: <Book />,
    title: 'React Js CoderHouse',
    link: './REACT_CERT.png',
    description:
      'Realice un curso de FrontEnd completo en esta institución, este es mi certificado sobre mis conocimientos en React.',
  },
  {
    icon: <FaReact />,
    title: 'MERN Stack Udemy',
    link: './REACT_MERN.jpg',
    description:
      'Este es un curso de Udemy en donde forme màs mis conocimientos como fullstack',
  },
  {
    icon: <DiJavascript />,
    title: 'JavaScript Udemy',
    link: './JAVASCRIPT.jpg',
    description:
      'Uno de los cursos màs completos que he realizado, explica como funciona JavaScript a la perfección.',
  },
  {
    icon: <SiSolidity />,
    title: 'SOLID Udemy',
    link: './SOLID.jpg',
    description:
      'Dentro de mi carrera para perfeccionarme hice un pequeños curso de los principios SOLID.',
  },
];

export const textData: ITextData = {
  textTitleOne: 'Mi',
  textTitleTwo: 'educación.',
  textDescription:
    'Estos son mis estudios dentro de mi trayectoria, mis conocimientos como desarrollador se basan netamente en estudiar de forma autodidacta, los títulos que tengo dentro de la Fuerza Aérea son solo títulos ya que no aprendí a desarrollar dentro de la institución, si tuve un acercamiento a ello y fue donde me quedo gustando este mundo.',
  textContact: 'Contacta conmigo',
};
