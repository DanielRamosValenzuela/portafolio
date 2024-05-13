import {
  BackendSkillData,
  frontendSkillData,
  skillData,
} from './data/data';
import SkillDataProvider from './SkillsProvider';
import SkillText from './SkillText';

const Skills = () => {
  return (
    <section
      className='flex flex-col items-center justify-center gap-7 h-full relative overflow-hidden pb-80 py-20'
      style={{ transform: 'scale(0.9' }}
    >
      <SkillText />

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center text-center'>
        {skillData.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={image.width}
            skillName={image.skillName}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center text-center'>
        {frontendSkillData.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={image.width}
            skillName={image.skillName}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-7 items-center text-center'>
        {BackendSkillData.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            skillName={image.skillName}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
