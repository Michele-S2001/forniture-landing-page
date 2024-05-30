import style from '../../styles/modules/homepagefooter.module.scss';
import footerSectionsLinks from '../../staticData/footerLinksData';
import FooterList from '../FooterList/FooterList';

export default function HomepageFooter() {
  return (
    <footer className={`${style.footerSection} px-10`}>
      <div className="container">
        <div className={style['footer-info']}>
          <section aria-label='footer slogan' className={style['footer-info__slogan']}>
            <h4 className={style['footer-info__slogan-title']}>Panto</h4>
            <p>
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </section>
          {footerSectionsLinks.map((el, idx) => (
            <FooterList key={idx} footerLinks={el} />
          ))}
        </div>
        <div className={style["footer-policies"]}>
          <a href="#">Copyright &copy; 2024</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
