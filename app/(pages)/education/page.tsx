import TransitionPage from '@/app/ui/animation/TransitionPage';
import AvatarEducation from '@/app/ui/education/AvatarEducation';
import CircleImage from '@/app/ui/components/CircleImage';
import SliderEducation from '@/app/ui/education/SliderEducation';

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarEducation />
      <div className='grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2'>
        <div className='max-w-[450px]'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
            Mi <span className='font-bold text-secondary'> educación.</span>
          </h1>
          <p className='mb-3 text-xl text-gray-300'>
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            diseño interfaces de usuario intuitivas y responsivas que reflejan
            la identidad de marca de mis clientes y mejoran su presencia en
            línea.
          </p>
          <a
            href='/contact'
            className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65'
          >
            Contacta conmigo
          </a>
        </div>
        <div>
          <SliderEducation />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
