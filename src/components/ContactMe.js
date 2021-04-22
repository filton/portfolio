import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FaSkype } from 'react-icons/fa';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: name + ', Email: ' + email,
      to_name: 'Toni',
      message_html:
        'Subject: ' + subject + '</br></br> Message: </br>' + message,
    };
    emailjs.send(
      'gmail',
      'template_7mBtoiKd',
      templateParams,
      'user_kHYMI7NnzkFuR4a8HnBqM'
    );
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setSubject('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contactme'>
      <div className='contact-info'>
        <h2>{t('contactme.h')}</h2>
        <p>{t('contactme.p')}</p>
        <ul>
          <li>
            <FiMail className='contact-info-icon' />
            <a href='mailto:toni.filipovic18@gmail.com'>
              {' '}
              toni.filipovic18@gmail.com
            </a>
          </li>
          <li>
            <FiPhone className='contact-info-icon' /> +385 92 503 7296
          </li>
          <li>
            <FiMapPin className='contact-info-icon' /> Rijeka,{' '}
            {t('contactme.country')}
          </li>
          <li>
            <FaSkype className='contact-info-icon' /> Toni Filipovic
          </li>
        </ul>
      </div>
      <div className='contactme-inner'>
        <form onSubmit={handleSubmit}>
          <label className='contactme-form-group'>
            <input
              className='contactme-form-control'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span>{t('contactme.name')} *</span>
            <span className='border'></span>
          </label>
          <label className='contactme-form-group'>
            <input
              className='contactme-form-control'
              type='text'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <span>{t('contactme.subject')} *</span>
            <span className='border'></span>
          </label>
          <label className='contactme-form-group'>
            <input
              className='contactme-form-control'
              type='textarea'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span>{t('contactme.message')} *</span>
            <span className='border'></span>
          </label>
          <label className='contactme-form-group'>
            <input
              className='contactme-form-control'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>{t('contactme.email')} *</span>
            <span className='border'></span>
          </label>
          <button className='contactme-button'>{t('contactme.submit')}</button>
        </form>
      </div>
    </div>
  );
}
