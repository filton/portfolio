import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className='projects-container'>
      <div>
        <h3>Portfolio App v2</h3>
        <p>{t('project.portfoliov2')}</p>
        <a
          href='https://github.com/filton/portfolio.git'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>To-Do App v3</h3>
        <p>{t('project.todov3')}</p>
        <a
          href='https://github.com/filton/react-redux-typescript-firebase-todo-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Configuration Wizard App</h3>
        <p>{t('project.confwizard')}</p>
        <a
          href='https://github.com/filton/configuration-wizard'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Slider</h3>
        <p>{t('project.slider')}</p>
        <a
          href='https://github.com/filton/jQuery-slider'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Portfolio App v1</h3>
        <p>{t('project.portfoliov1')}</p>
        <a
          href='https://github.com/filton/react-cv-app.git'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Chat App</h3>
        <p>{t('project.chatapp')}</p>
        <a
          href='https://github.com/filton/react-chat-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>To-Do App v2</h3>
        <p>{t('project.todov2')}</p>
        <a
          href='https://github.com/filton/react-todo-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Stopwatch</h3>
        <p>{t('project.stopwatch')}</p>
        <a
          href='https://github.com/filton/react-stopwatch'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>REST API</h3>
        <p>{t('project.restapi')}</p>
        <a
          href='https://github.com/filton/react-rest-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>Memory Game</h3>
        <p>{t('project.memorygame')}</p>
        <a
          href='https://github.com/filton/memory-game'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
      <div>
        <h3>To-Do App v1</h3>
        <p>{t('project.todov1')}</p>
        <a
          href='https://github.com/filton/todo-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='github-icon' />
        </a>
      </div>
    </div>
  );
};

export default Projects;
