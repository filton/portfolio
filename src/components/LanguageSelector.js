import React from 'react';
import { useTranslation } from 'react-i18next';
import UK from '../images/flags/uk-flag.png';
import Germany from '../images/flags/Germany-flag.png';
import Croatia from '../images/flags/croatia-flag.png';

const LanguageSelector = (LanguageSelector) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onClick={changeLanguage} className='navbar-flags'>
      <input
        type='image'
        src={UK}
        alt='UK Flag'
        value='en'
        name='language'
        defaultChecked
      />
      <input
        type='image'
        src={Germany}
        alt='Germany Flag'
        value='ger'
        name='language'
      />
      <input
        type='image'
        src={Croatia}
        alt='Croatia Flag'
        value='cro'
        name='language'
      />
    </div>
  );
};

export default LanguageSelector;
