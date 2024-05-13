import { CoverParticles } from '@/app/ui/animation/CoverParticles';
import TransitionPage from '@/app/ui/animation/TransitionPage';
import Skills from '@/app/ui/skills/Skills';

const SkillsPage = () => {
  return (
    <div>
      <TransitionPage />
      <div className='min-h-[100vh] h-full bg-[#030014]'>
        <CoverParticles />
        <Skills/>
      </div>
    </div>
  );
};

export default SkillsPage;
