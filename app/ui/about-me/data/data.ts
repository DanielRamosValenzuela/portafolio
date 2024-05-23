import { IDataAboutPageTimeLine, IDataCounter, IDataTitle } from './interface';

export const dataAboutPageTimeLine: IDataAboutPageTimeLine[] = [
  {
    id: 15,
    title: 'Desarrollador Backend',
    subtitle: 'SMU',
    description:
      'Mi primer empleo como desarrollador fue en SMU dentro del equipo de medios de pago, donde realicé diversas integraciones y creé métodos de pago como transferencias, tarjetas de regalo, KLAP, Transbank, entre otros.',
    date: 'Ene 2022',
  },
  {
    id: 16,
    title: 'Desarrollador FrontEnd',
    subtitle: 'CoderHouse',
    description:
      'En mi desarrollo profesional decidí participar en un bootcamp para perfeccionar mis habilidades como desarrollador. Elegí esta institución para certificarme mejor como desarrollador.',
    date: 'Abr 2021',
  },
  {
    id: 17,
    title: 'Desarrollador Independiente',
    subtitle: 'Freelancer',
    description:
      'Comencé mi propio emprendimiento como desarrollador, buscando clientes que requirieran de mis habilidades. Entre ellos, varios amigos. Logré trabajar en e-commerce e integraciones con otras aplicaciones como Beetrack (empresa de logística), todo con el objetivo de ganar experiencia para buscar un empleo estable.',
    date: 'Ene 2021',
  },
  {
    id: 18,
    title: 'Oficial en la FACh',
    subtitle: 'Oficial (TI)',
    description:
      'Dentro de la institución, en el período de 2018 a 2021, fui asignado a trabajar en varios departamentos, como logística en la APA, telecomunicaciones en FIDAE, entre otros.',
    date: 'Ene 2021',
  },
  {
    id: 19,
    title: 'Licenciado en Ingeniería Electrónica',
    subtitle: 'Academia Politécnica Aeronáutica',
    description:
      'Ya como oficial de la FACh, fui asignado a la Academia Politécnica Aeronáutica (APA) para estudiar ingeniería electrónica durante 3 años.',
    date: 'Nov 2018',
  },
  {
    id: 20,
    title: 'Oficial (TI) de la FACh',
    subtitle: 'Escuela de Aviación',
    description:
      'Fui cadete durante 4 años en la Escuela de Aviación Capitán Manuel Ávalos Prado, estudiando para graduarme como Oficial en Telecomunicaciones e Informática de la Fuerza Aérea de Chile, adquiriendo habilidades tanto técnicas como de liderazgo.',
    date: 'Ene 2015',
  },
];

export const dataCounter: IDataCounter[] = [
  {
    id: 0,
    endCounter: 4,
    text: 'Años como desarrollador',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 10,
    text: 'Años de experiencia profesional',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 20,
    text: 'Integraciones y proyectos realizados',
    lineRight: false,
    lineRightMobile: false,
  },
];

export const dataTitles: IDataTitle = {
  title: 'Toda mi ',
  subtitle: 'trayectoria profesional',
};
