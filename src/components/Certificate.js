import React from 'react';
import AlgebraFED from '../images/certificates/AlgebraFED.jpg';
import ReactDevCourse from '../images/certificates/React Developer Course.jpg';
import ReactJS from '../images/certificates/ReactJS – reaktivna arhitektura.jpg';
import DevEnv from '../images/certificates/Razvojna okolina.jpg';
import JS from '../images/certificates/JavaScript – klijentsko skriptiranje.jpg';
import Bootcamp from '../images/certificates/Web Developer Bootcamp.jpg';
import UdemyJS from '../images/certificates/js2018.jpg';
import CSS from '../images/certificates/CSS – izgled i dizajn.jpg';
import HTML from '../images/certificates/HTML – struktura i sadrzaj.jpg';
import HTMLCSS from '../images/certificates/HTML&CSS.jpg';
import Web from '../images/certificates/Web korisnicka sucelja.jpg';
import { useTranslation } from 'react-i18next';

const Certificate = () => {
  const { t } = useTranslation();
  return (
    <div className='certificate-container'>
      <div>
        <h3>{t('certificate.fed')}</h3>
        <img src={AlgebraFED} alt='Front-End Developer Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>{t('certificate.rdc')}</h3>
        <img
          src={ReactDevCourse}
          alt='React Developer Course Certificate'
        ></img>
      </div>
      <hr />
      <div>
        <h3>ReactJS</h3>
        <img src={ReactJS} alt='React Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>{t('certificate.de')}</h3>
        <img src={DevEnv} alt='Development environment Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>JavaScript</h3>
        <img src={JS} alt='JS Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>Web Developer Bootcamp</h3>
        <img src={Bootcamp} alt='Web Developer Bootcamp Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>JavaScript</h3>
        <img src={UdemyJS} alt='Udemy JS Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>CSS</h3>
        <img src={CSS} alt='CSS Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>HTML</h3>
        <img src={HTML} alt='HTML Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>HTML & CSS</h3>
        <img src={HTMLCSS} alt='HTML & CSS Certificate'></img>
      </div>
      <hr />
      <div>
        <h3>{t('certificate.wui')}</h3>
        <img src={Web} alt='Web user interfaces Certificate'></img>
      </div>
    </div>
  );
};

export default Certificate;
