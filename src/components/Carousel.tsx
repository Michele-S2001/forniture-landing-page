import { useRef } from 'react'
import style from '../styles/modules/carousel.module.scss'
import ProductCard from './ProductCard';

export default function Carousel() {

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleSliding = (direction: 'left'|'right'):void => {
    
    if(carouselRef.current) {
      const visibleWidth = carouselRef.current.offsetWidth;
      const scrollAmount = direction === 'right' ? visibleWidth : -visibleWidth;
      carouselRef.current.scrollLeft += scrollAmount;
    }
  }

  return (
    <div className={style.carousel}>
      <div className={style.carousel__showcase} ref={carouselRef}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <strong className={`${style.leftArrow} ${style.arrow}`} onClick={() => (handleSliding('left'))}>&#8592;</strong>
      <strong className={`${style.rightArrow} ${style.arrow}`} onClick={() => (handleSliding('right'))}>&#8594;</strong>
    </div>
  )
}