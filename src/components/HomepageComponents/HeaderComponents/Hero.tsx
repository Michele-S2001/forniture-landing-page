import Navbar from "../../Navbar/Navbar";
import style from '../../../styles/modules/hero.module.scss';
import Searchbar from "./Searchbar";

export default function Hero() {

  return (
    <div className={style.hero}>
      <Navbar />
      <div className={`px-10 ${style.hero__content}`}>
        <div className="container">
          <div className="grid">
            <div className={style.innerContent}>
              <h1 className={style.mainTitle}>Make your interior more minimalistic & modern</h1>
              <p className={style.slogan}>Turn your room with panto into a lot more minimalist and modern width ease and speed</p>
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}