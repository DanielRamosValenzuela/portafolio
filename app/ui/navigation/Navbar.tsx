'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { Motion } from '../animation/Motion';
import { menuNavbar, menuNavbarEnglish } from './menuNavbar';
import ToolTip from '../components/ToolTip';
import { useLanguageStore } from '@/app/store/language';

const Navbar = () => {
  const router = usePathname();
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      menuData: menuNavbar,
    };

    if (isEnglish === false) {
      data = {
        menuData: menuNavbar,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        menuData: menuNavbarEnglish,
      };

      return data;
    }

    return data;
  };

  return (
    <Motion
      position='right'
      className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10'
    >
      <nav>
        <div className='flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm'>
          {getTextLanguage(language).menuData.map((item) => (
            <ToolTip tooltip={item.tooltip} key={item.id}>
              <div
                key={item.id}
                className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                  router === item.link && 'bg-secondary'
                }`}
                data-tooltip-target={item.tooltip}
              >
                <Link href={item.link}>{item.icon} </Link>
              </div>
            </ToolTip>
          ))}
        </div>
      </nav>
    </Motion>
  );
};

export default Navbar;
