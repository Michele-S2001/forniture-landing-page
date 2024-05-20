import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'

import style from '../../styles/modules/navbar.module.scss'

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

  return (
    <header className={`px-10 ${style.pageHeader}`}>
      <div className="container">
        <nav className={style.navbar}>
          <a 
            aria-label="Homepage link" 
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
          <button aria-label="Menu" className={style.navbar__hamburgerMenu}>
            <FontAwesomeIcon icon={faBars} size="xl"/>
          </button>
        </nav>
      </div>
    </header>
  )
}