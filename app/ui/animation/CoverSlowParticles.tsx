'use client';

import { useEffect, useState } from 'react';

import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

export const CoverSlowParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div className='w-[0px]'>
        <Particles
          id='tsparticles'
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'grab',
                  parallax: {
                    enable: true,
                    force: 40,
                    smooth: 60
                  }
                },
              },
              modes: {
                push: {
                  quantity: 3,
                },
                grab: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 2, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};
