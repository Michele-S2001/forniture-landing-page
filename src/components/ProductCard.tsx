import style from '../styles/modules/productcard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard() {

  return (
    <>
    {/*TODO: INSERIRE I DATI DINAMICAMENTE*/}
    <div className={style.productCard}>
      <img className={style.productCard__image} src="/img/lamp_1.jpg" alt="Chair image"/>
      <div className={style.productCard__info}>
        <small className={style.product_type}>Lorem</small>
        <a href="#">
          <h4 className={style.product_name}>Lorem ipsum man</h4>
        </a>
        <div className={style.product_rating}>
          {/* TODO: mettere le stelle */}
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className={style.productCard__add}>
        <span className={style.product_price}>99 &euro;</span>
        <button className={style.product_addBtn}>+</button>
      </div>
    </div>
    </>
  )
}