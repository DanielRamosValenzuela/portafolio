import { BsArrowBarRight } from 'react-icons/bs';
import { IDataPlaceholderForm } from './data/interface';

interface ContactFormProps {
  dataPlaceholderForm: IDataPlaceholderForm;
}

const ContactForm: React.FC<ContactFormProps> = ({ dataPlaceholderForm }) => {
  return (
    <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
      <div className='flex gap-x-6 w-full'>
        <input
          type='text'
          placeholder={dataPlaceholderForm.placeHolderName}
          className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
        />
        <input
          type='text'
          placeholder={dataPlaceholderForm.placeHolderEmail}
          className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
        />
      </div>
      <input
        type='text'
        placeholder={dataPlaceholderForm.placeHolderSubject}
        className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
      />
      <textarea
        name=''
        id=''
        placeholder={dataPlaceholderForm.placeHolderMessage}
        className='w-full h-[180px] p-6 capitalize rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
      ></textarea>
      <button className='h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-secondary group'>
        <span className='group:hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration 500'>
          {dataPlaceholderForm.textSend}
        </span>
        <BsArrowBarRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
      </button>
    </form>
  );
};

export default ContactForm;
