import { Book, Computer, Pencil, ShieldHalf } from 'lucide-react';
import { DiJavascript, DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { IEducationData, ITextData } from './interface';

export const educationDataEnglish: IEducationData[] = [
  {
    icon: <ShieldHalf />,
    title: 'Air Force Telecommunications and IT Officer',
    link: './CERT_OFICIAL_TI.pdf',
    description:
      'Graduated as an Officer in Telecommunications and IT from the Chilean Air Force.',
  },
  {
    icon: <Pencil />,
    title: 'Electronic Engineer',
    link: './CERT_ING_ELCT.pdf',
    description:
      'Earned my degree as an Electronic Engineer from the Aeronautical Polytechnic Academy.',
  },
  {
    icon: <Computer />,
    title: 'Web Development CoderHouse',
    link: './WEB_CERT.png',
    description:
      'I completed a comprehensive FrontEnd course at CoderHouse. Here is my certification as a web developer.',
  },
  {
    icon: <Book />,
    title: 'React Js CoderHouse',
    link: './REACT_CERT.png',
    description:
      'I completed a React Js course at CoderHouse. Here is my certificate verifying my skills.',
  },
  {
    icon: <DiJavascript1 />,
    title: 'JavaScript CoderHouse',
    link: './certificadoJS.png',
    description:
      'I completed an intensive JavaScript course at CoderHouse. Here is my certificate verifying my skills.',
  },
  {
    icon: <FaReact />,
    title: 'MERN Stack Udemy',
    link: './REACT_MERN.jpg',
    description:
      'I took a MERN Stack course on Udemy to further my knowledge as a full-stack developer.',
  },
  {
    icon: <DiJavascript />,
    title: 'JavaScript Udemy',
    link: './JAVASCRIPT.jpg',
    description:
      'This is one of the most comprehensive courses I have taken on Udemy, which thoroughly explains how JavaScript works.',
  },
  {
    icon: <SiSolidity />,
    title: 'SOLID Principles Udemy',
    link: './SOLID.jpg',
    description:
      'As part of my professional development, I took a course on SOLID principles at Udemy.',
  },
];

export const textDataEnglish: ITextData = {
  textTitleOne: 'My',
  textTitleTwo: 'Education.',
  textDescription:
    'Throughout my career, I have acquired knowledge through self-study. Although my titles in the Air Force are formal recognitions, my learning and development in programming did not come from this institution, though it was there that I discovered and became passionate about this field.',
  textContact: 'Contact me',
};
