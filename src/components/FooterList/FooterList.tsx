import style from '../../styles/modules/footerlist.module.scss'

interface linksList {
  label: string;
  path: string;
}

interface cardFooterLinks {
  footerCardTitle: string;
  footerCardLinks: linksList[];
}

interface props {
  footerLinks: cardFooterLinks;
}

export default function FooterList({ footerLinks }: props) {
  return (
    <section aria-label="footer links" className={style["footerList"]}>
      <h4 className={style["footerList__heading"]}>
        {footerLinks.footerCardTitle}
      </h4>
      <ul className={style["footerList__links"]}>
        {footerLinks.footerCardLinks.map((el, idx) => (
          <li key={idx}>
            <a href={el.path}> {el.label} </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
