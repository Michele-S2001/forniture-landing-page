import style from '../styles/modules/bestselling.module.scss';
import Carousel from './Carousel';
import bestSellingProducts from '../bestSellingProductsData';
import ProductCard from './ProductCard';

export default function BestSelling() {

  return (
    <section className={`${style.bestSelling} px-10`}>
      <div className="container">
        <div className={style.productsShowcase}>
          <h2 className={style.productsShowcase__title}>Best Selling Products</h2>
          <Carousel>
            {bestSellingProducts.map(el => (
              <ProductCard key={el.id} product={el}/>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}