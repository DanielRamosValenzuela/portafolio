import Link from 'next/link';
import { menuHeader } from './data/menuHeader';
import { CircleFlag } from 'react-circle-flags';

//TODO Add animation sidebar

interface SideBarProps {
  language: boolean;
  handleInputClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ language, handleInputClick }) => {
  return (
    <div className='md:hidden w-full h-full bg-darkBg bg-opacity-90 z-10'>
      <div className='items-center justify-center p-5'>
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
      <div className='ox-2 p-3 space-y-2 sm:px-3'>
        {menuHeader.map(({ logo, src, id, tooltip }) => (
          <Link
            key={id}
            href={src}
            target='_blank'
            className='transition-all duration-300 hover:text-secondary mt-3 text-lg'
          >
            <div className='flex gap-2 pt-3'>
              {logo}
              {tooltip}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
