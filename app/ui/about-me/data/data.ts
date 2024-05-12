import { IDataAboutPageTimeLine, IDataCounter, IDataTitle } from './interface';

export const dataAboutPageTimeLine: IDataAboutPageTimeLine[] = [
  {
    id: 15,
    title: 'Backend Developer',
    subtitle: 'SMU',
    description:
      'Mi primer gran empelo como desarrollador fue en SMU dentro de la célula de medios de pago, hice varias integraciones y cree medios de pago como por ejemplo Transferencia, giftcard, KLAP, transbank, entre otros',
    date: 'Ene 2022',
  },
  {
    id: 16,
    title: 'Developer FrontEnd',
    subtitle: 'CoderHouse',
    description:
      'Dentro de mi desarrollo como profesional decidí realizar un bootcamp para perfeccionar mis habilidades como developer, decidí entrar a esta institución para certificarme mejor como desarrollador',
    date: 'Abr 2021',
  },
  {
    id: 17,
    title: 'Developer independiente',
    subtitle: 'Freelancer',
    description:
      'Empece mi propio emprendimiento como desarrollador buscando clientes que requieran de mis habilidades, entre varios eran amigos míos, llegue realizar ecommerce e integraciones con de otras aplicaciones como Beetrack (Empresa de logística), todo esto con el fin de tomar experiencia y poder buscar algún empleo estable',
    date: 'Ene 2021',
  },
  {
    id: 18,
    title: 'Trabajo como oficial en la FACh',
    subtitle: 'Oficial (TI)',
    description:
      'Dentro de la institución en el periodo entre el 2018 y 2021 fui destinado a trabajar en distintos departamentos dentro de la misma institución com por ejemplo, logística en la APA, Telecomunicaciones en FIDAE entre otros.',
    date: 'Ene 2021',
  },
  {
    id: 19,
    title: 'Licenciado en ingeniería electronica',
    subtitle: 'Academia Politécnica Aeronáutica',
    description:
      'Siendo ya Oficial de la FACh fui destinado a la Academia Politécnica Aeronáutica (APA) para estudiar ingeniería electronica por 3 años',
    date: 'Nov 2018',
  },
  {
    id: 20,
    title: 'Oficial (TI) De la FACh',
    subtitle: 'Escuela de aviación',
    description:
      'Fui cadete por 4 años en la Escuela de Aviación Capitan Manuel Ávalos Prado, estudiando para egresar como Oficial en Telecomunicaciones e Informática de la Fuerza Aérea de Chile, adquiriendo habilidades tanto técnicas como de liderazgo.',
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
    text: 'Experiencia laboral',
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
