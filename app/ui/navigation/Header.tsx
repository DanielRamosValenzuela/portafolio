'use client';

import Link from 'next/link';
import { CircleFlag } from 'react-circle-flags';

import { Motion } from '../animation/Motion';
import { menuHeader } from './menuHeader';
import { useLanguageStore } from '@/app/store/language';
import ToolTip from '../components/ToolTip';

const Header = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const changeLanguage = useLanguageStore((state) => state.changeLanguage);

  const handleInputClick = () => {
    changeLanguage(language);
  };

  return (
    <Motion
      position='bottom'
      className='absolute z-40 inline-block w-full top-5 md:top-10'
    >
      <header>
        <div className='container justify-between max-w-6xl mx-auto md:flex'>
          <div className='items-center justify-center'>
            <Link href='/'>
              <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                DanielRamos
                <span className='text-secondary'>Dev</span>
              </h1>
            </Link>
          </div>
          <div className='flex items-center justify-center m-3'>
            <label className='inline-flex items-center me-5 cursor-pointer'>
              <div className='mr-3 w-6'>
                <CircleFlag countryCode='es' />
              </div>
              <input
                type='checkbox'
                className='sr-only peer'
                defaultChecked={language}
              />
              <div
                onClick={handleInputClick}
                className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
              ></div>
              <div className='ms-3 w-6'>
                <CircleFlag countryCode='gb' />
              </div>
            </label>
          </div>
          <div className='flex items-center justify-center gap-7'>
            {menuHeader.map(({ logo, src, id, tooltip }) => (
              <ToolTip tooltip={tooltip} key={id}>
                <Link
                  key={id}
                  href={src}
                  target='_blank'
                  className='transition-all duration-300 hover:text-secondary'
                >
                  {logo}
                </Link>
              </ToolTip>
            ))}
          </div>
        </div>
      </header>
    </Motion>
  );
};

export default Header;
