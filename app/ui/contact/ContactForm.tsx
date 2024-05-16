import emailjs from '@emailjs/browser';

import { BsArrowBarRight } from 'react-icons/bs';
import toast from 'react-hot-toast';

import { IDataPlaceholderForm } from './data/interface';
import { useRef } from 'react';

interface ContactFormProps {
  dataPlaceholderForm: IDataPlaceholderForm;
}

const ContactForm: React.FC<ContactFormProps> = ({ dataPlaceholderForm }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
          form.current,
          { publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string }
        )
        .then(
          () => {
            toast.success(dataPlaceholderForm.textSuccess);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            toast.error(error.text);
          }
        );
    }
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='flex-1 flex flex-col gap-6 w-full mx-auto'
    >
      <div className='flex gap-x-6 w-full'>
        <input
          type='text'
          placeholder={dataPlaceholderForm.placeHolderName}
          name='user_name'
          className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
        />
        <input
          type='text'
          name='user_email'
          placeholder={dataPlaceholderForm.placeHolderEmail}
          className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
        />
      </div>
      <input
        type='text'
        name='subject'
        placeholder={dataPlaceholderForm.placeHolderSubject}
        className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
      />
      <textarea
        name='message'
        placeholder={dataPlaceholderForm.placeHolderMessage}
        className='w-full h-[180px] p-6 capitalize rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
      ></textarea>
      <button
        type='submit'
        value='Send'
        className='h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-secondary group'
      >
        <span className='group:hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration 500'>
          {dataPlaceholderForm.textSend}
        </span>
        <BsArrowBarRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
      </button>
    </form>
  );
};

export default ContactForm;
