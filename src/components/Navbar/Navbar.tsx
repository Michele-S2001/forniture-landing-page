import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faX } from '@fortawesome/free-solid-svg-icons'

import style from '../../styles/modules/navbar.module.scss'
import { useState } from 'react';

interface navLink {
  label: string;
  link: string;
}

export default function Navbar() {

  const navLinks: navLink[] = [
    {
      label: 'Furniture',
      link: '#'
    },
    {
      label: 'Shop',
      link: '#'
    },
    {
      label: 'About Us',
      link: '#'
    },
    {
      label: 'Contact',
      link: '#'
    }
  ]

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((prev) => !prev)
  }

  return (
    <section className={`px-10 ${style.pageHeader}`}>
      <div className="container">
        <nav className={style.navbar}>
          <a 
            aria-label="Homepage link logo" 
            className={style.navbar__logo} 
            href="#"
          >
            Panto
          </a>
          <ul  className={style.navbar__mainLinks}>
            {navLinks.map((el, i) => {
              return (
                <li className={style.link} key={i}>
                  <a href={el.link}>{el.label}</a>
                </li>
              )
            } )}
          </ul>
          <a 
            className={style.navbar__cartBtn} 
            aria-label="Shopping cart link" 
            href="#"
          >
            <FontAwesomeIcon icon={faBagShopping} size="xl"/>
          </a>
          <button 
            onClick={toggleMobileMenu}
            aria-label="Open menu" 
            aria-expanded={mobileMenuIsOpen}
            className={style.navbar__hamburgerMenu}>
            <FontAwesomeIcon icon={faBars} size="xl"/>
          </button>
          {/* MOBILE MENU */}
          <div className={`${style['outer-mobileNavbar']} ${ mobileMenuIsOpen ? style['show'] : style['close']}`}>
            <div style={{ display: 'flex', justifyContent: 'end'}}>
              <button 
                onClick={toggleMobileMenu}
                aria-label='close the menu' 
                className={style.closingMobileNavbarBtn}>
                <FontAwesomeIcon icon={faX} size='xl'/>
              </button>
            </div>
            <ul className={style.mobileNavbar}>
              {navLinks.map((el, idx) => {
                  return (
                    <li onClick={toggleMobileMenu} className={style.link} key={idx}>
                      <a href={el.link}>{el.label}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}