'use client';

import { useLanguageStore } from '@/app/store/language';
import TransitionPage from '@/app/ui/animation/TransitionPage';
import CircleImage from '@/app/ui/components/CircleImage';
import Container from '@/app/ui/components/Container';
import ContactForm from '@/app/ui/contact/ContactForm';
import {
  dataPlaceholderForm,
  dataTextContact,
} from '@/app/ui/contact/data/data';
import {
  dataPlaceholderFormEnglish,
  dataTextContactEnglish,
} from '@/app/ui/contact/data/dataEnglish';

const ContactPage = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      dataTextContact: dataTextContact,
      dataPlaceholderForm: dataPlaceholderForm,
    };

    if (isEnglish === false) {
      data = {
        dataTextContact: dataTextContact,
        dataPlaceholderForm: dataPlaceholderForm,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        dataTextContact: dataTextContactEnglish,
        dataPlaceholderForm: dataPlaceholderFormEnglish,
      };

      return data;
    }

    return data;
  };
  return (
    <Container>
      <TransitionPage />
      <CircleImage />
      <div className='container mx-auto py-32 text-center xl-text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='text-center mb-12 text-4xl'>
            {getTextLanguage(language).dataTextContact.h2Text}
            <span className='text-secondary'>
              {getTextLanguage(language).dataTextContact.spanText}
            </span>
          </h2>
          <ContactForm
            dataPlaceholderForm={getTextLanguage(language).dataPlaceholderForm}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
