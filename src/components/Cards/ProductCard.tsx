import style from '../../styles/modules/productcard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface bestProduct {
  id: number;
  type: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  image: string;
}

export default function ProductCard({ product }: {product: bestProduct}) {

  const stars = new Array(product.rating).fill(null);

  return (
    <>
    <div className={style.productCard}>
      <img className={style.productCard__image} src={product.image} alt="Chair image"/>
      <div className={style.productCard__info}>
        <small className={style.product_type}> {product.type} </small>
        <a href="#">
          <h4 className={style.product_name}> {product.name} </h4>
        </a>
        <div role='group' aria-label={`Stars number: ${product.rating}`} className={style.product_rating}>
          {stars.map((_, idx) => (
            <FontAwesomeIcon icon={faStar} key={idx}/>
          ))}
        </div>
      </div>
      <div className={style.productCard__add}>
        <span className={style.product_price}>{product.price} &euro;</span>
        <button aria-label='Add to shopping cart' className={style.product_addBtn}>+</button>
      </div>
    </div>
    </>
  )
}