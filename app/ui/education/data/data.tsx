import { Book, Computer, Pencil, Rocket, ShieldHalf } from 'lucide-react';
import { DiJavascript, DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { IEducationData, ITextData } from './interface';

export const educationData: IEducationData[] = [
  {
    icon: <ShieldHalf />,
    title: 'Título de Oficial (TI) de la FACh',
    link: './CERT_OFICIAL_TI.pdf',
    description:
      'Título obtenido como Oficial en Telecomunicaciones e Informática de la FACh.',
  },
  {
    icon: <Pencil />,
    title: 'Ingeniero Electrónico',
    link: './CERT_ING_ELCT.pdf',
    description:
      'Graduado como Ingeniero Electrónico en la Academia Politécnica Aeronáutica.',
  },
  {
    icon: <Computer />,
    title: 'Desarrollo Web CoderHouse',
    link: './WEB_CERT.png',
    description:
      'Completé un curso de FrontEnd en CoderHouse. Aquí está mi certificado como desarrollador web.',
  },
  {
    icon: <Book />,
    title: 'React Js CoderHouse',
    link: './REACT_CERT.png',
    description:
      'Completé un curso de React Js en CoderHouse. Aquí está mi certificado que avala mis conocimientos.',
  },
  {
    icon: <DiJavascript1 />,
    title: 'JavaScript CoderHouse',
    link: './certificadoJS.png',
    description:
      'Completé un curso intensivo de JavaScript en CoderHouse. Aquí está mi certificado que avala mis conocimientos.',
  },
  {
    icon: <FaReact />,
    title: 'MERN Stack Udemy',
    link: './REACT_MERN.jpg',
    description:
      'Realicé un curso de MERN Stack en Udemy para profundizar mis conocimientos como desarrollador fullstack.',
  },
  {
    icon: <DiJavascript />,
    title: 'JavaScript Udemy',
    link: './JAVASCRIPT.jpg',
    description:
      'Este es uno de los cursos más completos que he realizado en Udemy, que explica detalladamente el funcionamiento de JavaScript.',
  },
  {
    icon: <SiSolidity />,
    title: 'SOLID Udemy',
    link: './SOLID.jpg',
    description:
      'Como parte de mi desarrollo profesional, realicé un curso sobre los principios SOLID en Udemy.',
  },
];

export const textData: ITextData = {
  textTitleOne: 'Mi',
  textTitleTwo: 'educación.',
  textDescription:
    'A lo largo de mi carrera, he adquirido conocimientos de manera autodidacta. Aunque mis títulos en la Fuerza Aérea son reconocimientos formales, mi aprendizaje y desarrollo en programación no provienen de esta institución, aunque sí fue allí donde descubrí y me apasioné por este ámbito.',
  textContact: 'Contacta conmigo',
};
