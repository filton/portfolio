import React, { useState } from 'react';
import ReactLogo from '../images/skills/react.png';
import JSLogo from '../images/skills/javascript.png';
import CSSLogo from '../images/skills/css.png';
import HTMLLogo from '../images/skills/html.png';
import GitLogo from '../images/skills/git.png';
import GitHubLogo from '../images/skills/github.png';
import WordPress from '../images/skills/wordpress.png';
import Experience from '../images/skills/Experience.jpg';
import { useTranslation } from 'react-i18next';

const ReadMore = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const text = () => {
    return (
      <>
        <h3>{t('experience.h2')}</h3>
        {expanded && (
          <div className='experience-span'>
            <p>{t('experience.p1')}</p>
            <p className='experience-hp'>{t('experience.p2')}</p>
            <div className='experience-p'>
              <p>{t('experience.p3')}</p>
              <p>{t('experience.p4')}</p>
              <p>{t('experience.p5')}</p>
              <p>{t('experience.p6')}</p>
              <p>{t('experience.p7')}</p>
              <p>{t('experience.p8')}</p>
              <p>{t('experience.p9')}</p>
              <p>{t('experience.p10')}</p>
            </div>
            <p>{t('experience.p11')}</p>
            <p>{t('experience.p12')}</p>
            <p>{t('experience.p13')}</p>
            <p>{t('experience.p14')}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`experience ${expanded ? 'expanded' : 'collapsed'}`}>
      <div>
        {text()}
        {expanded ? (
          <div onClick={() => setExpanded(false)} className='highlight-text'>
            {t('experience.readless')}
          </div>
        ) : (
          <div onClick={() => setExpanded(true)} className='highlight-text'>
            {t('experience.readmore')}
          </div>
        )}
      </div>
    </div>
  );
};

const SkillsAndEducation = () => {
  const { t } = useTranslation();

  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <label className='border-label'>{t('skills.h')}</label>
        <div className='skills-container'>
          <div>
            <h3>React</h3>
            <img src={ReactLogo} alt='React logo'></img>
            <div className='skills-bar'>
              <div className='skills react'></div>
            </div>
          </div>
          <div>
            <h3>JavaScript</h3>
            <img src={JSLogo} alt='JavaScript logo'></img>
            <div className='skills-bar'>
              <div className='skills js'></div>
            </div>
          </div>
          <div>
            <h3>CSS / SCSS</h3>
            <img src={CSSLogo} alt='CSS logo'></img>
            <div className='skills-bar'>
              <div className='skills css'></div>
            </div>
          </div>
          <div>
            <h3>HTML</h3>
            <img src={HTMLLogo} alt='HTML logo'></img>
            <div className='skills-bar'>
              <div className='skills html'></div>
            </div>
          </div>
          <div>
            <h3>Git / GitHub</h3>
            <img src={GitLogo} alt='Git logo'></img>
            <img src={GitHubLogo} alt='GitHub logo'></img>
            <div className='skills-bar'>
              <div className='skills git'></div>
            </div>
          </div>
          <div>
            <h3>WordPress</h3>
            <img src={WordPress} alt='WordPress logo'></img>
            <div className='skills-bar'>
              <div className='skills wordpress'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='inner-container'>
        <label className='border-label'>{t('languages.h')}</label>
        <div className='languages-container'>
          <div>
            <h3>{t('languages.cro')}</h3>
            <div className='languages-bar'>
              <div className='languages croatian'></div>
            </div>
          </div>
          <div>
            <h3>{t('languages.ger')}</h3>
            <div className='languages-bar'>
              <div className='languages german'></div>
            </div>
          </div>
          <div>
            <h3>{t('languages.eng')}</h3>
            <div className='languages-bar'>
              <div className='languages english'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='inner-container'>
        <label className='border-label'>{t('education.h')}</label>
        <h4>{t('education.h1')}</h4>
        <h4>{t('education.h2')}</h4>
        <h4>{t('education.h3')}</h4>
      </div>
      <div className='inner-container'>
        <label className='border-label'>{t('experience.h')}</label>
        <div className='experience'>
          <h3>{t('experience.h1')}</h3>
          <ReadMore />
          <img src={Experience} alt='Experience'></img>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndEducation;
