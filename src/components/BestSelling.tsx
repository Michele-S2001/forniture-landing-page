import style from '../styles/modules/bestselling.module.scss'
import Carousel from './Carousel'

export default function BestSelling() {

  return (
    <section className={`${style.bestSelling} px-10`}>
      <div className="container">
        <div className={style.productsShowcase}>
          <h2 className={style.productsShowcase__title}>Best Selling Products</h2>
          {/* COMPONENTE CAROSELLO */}
          <Carousel />
        </div>
      </div>
    </section>
  )
}