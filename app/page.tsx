import TransitionPage from './ui/animation/TransitionPage';
import { CoverParticles } from './ui/animation/CoverParticles';
import Home from './ui/home/Home';

export default function HomePage() {
  return (
    <main>
      <TransitionPage />
      <div className='flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover'>
        <CoverParticles />
        <Home/>
      </div>
    </main>
  );
}
