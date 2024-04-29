import { navLink } from "../interfaces/MyInterfaces"


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
    <header className="px-10">
      <div className="container">
        <nav>
          <a href="#">Panto</a>
          <ul>
            {navLinks.map((el, i) => {
              return (
                <li key={i}>
                  <a href={el.link}>{el.label}</a>
                </li>
              )
            } )}
          </ul>
          
        </nav>
      </div>
    </header>
  )
}