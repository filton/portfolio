import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import SkillsAndEducation from './SkillsAndEducation';
import Projects from './Projects';
import Certificate from './Certificate';
import ContactMe from './ContactMe';
import LanguageSelector from './LanguageSelector';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                className='nav-links'
                activeClassName='active-link'
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/skills-education'
                className='nav-links'
                activeClassName='active-link'
                onClick={closeMobileMenu}
              >
                {t('navbar.skills')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/projects'
                className='nav-links'
                activeClassName='active-link'
                onClick={closeMobileMenu}
              >
                {t('navbar.projects')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/certificates'
                className='nav-links'
                activeClassName='active-link'
                onClick={closeMobileMenu}
              >
                {t('navbar.certificates')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact-me'
                className='nav-links'
                activeClassName='active-link'
                onClick={closeMobileMenu}
              >
                {t('navbar.contact')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/skills-education' component={SkillsAndEducation} />
        <Route path='/projects' component={Projects} />
        <Route path='/certificates' component={Certificate} />
        <Route path='/contact-me' component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navbar;
