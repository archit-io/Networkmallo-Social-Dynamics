import React, { useState } from 'react';
import Link from 'next/link';

import * as ROUTES from '../../constants/routes';

import Head from 'next/head'

function Navigation(props) {

const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    
    <div>
        <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        </Head>
        <nav className='navbar'>            
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link href={ROUTES.LANDING} >
                <a className='nav-links' onClick={closeMobileMenu}>Home</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={ROUTES.ABOUT} >
                <a className='nav-links' onClick={closeMobileMenu}>About me</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={ROUTES.SYSTEM} >
                <a className='nav-links' onClick={closeMobileMenu}>System</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={ROUTES.ARTICLES} >
                <a className='nav-links' onClick={closeMobileMenu}>Articles</a>
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link href={ROUTES.SERVICES} >
                <a className='nav-links' onClick={closeMobileMenu}>Services</a>
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link href={ROUTES.FAQS} >
                <a className='nav-links' onClick={closeMobileMenu}>FAQs</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={ROUTES.CONTACT} >
                <a className='nav-links' onClick={closeMobileMenu}>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>    
        </div>
  )

}

export default Navigation;
