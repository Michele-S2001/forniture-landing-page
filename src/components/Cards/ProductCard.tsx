import style from '../../styles/modules/productcard.module.scss'
import RatingStars from '../RatingStars/RatingStars';

interface bestProduct {
  id: number;
  type: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  image: string;
}

export default function ProductCard({ product }: {product: bestProduct}) {

  return (
    <div className={style.productCard}>
      <img className={style.productCard__image} src={product.image} alt="Chair image"/>
      <div className={style.productCard__info}>
        <small className={style.product_type}> {product.type} </small>
        <a href="#">
          <h4 className={style.product_name}> {product.name} </h4>
        </a>
        <RatingStars ratingNum={product.rating} />
      </div>
      <div className={style.productCard__add}>
        <span tabIndex={0} className={style.product_price}>{product.price} &euro;</span>
        <button aria-label='Add to shopping cart' className={style.product_addBtn}>+</button>
      </div>
    </div>
  )
}