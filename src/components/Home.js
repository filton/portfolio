import React from 'react';
import ProfileImg from '../images/profile/ProfilePhoto.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='homepage'>
      <div className='homepage-section'>
        <h3>{t('homepage.h')}</h3>
        <h1>Toni Filipović</h1>
        <h2>Junior Front-End Developer</h2>
        <p>{t('homepage.p')}</p>
        <a
          href='https://github.com/filton'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/toni-filipovic-a01a081b8/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='linkedin-icon' />
        </a>
      </div>
      <img src={ProfileImg} alt='Profile img'></img>
    </div>
  );
}

export default Home;
