import { useRef } from 'react'
import style from '../styles/modules/carousel.module.scss'

export default function Carousel() {

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleSliding = (direction: 'left'|'right'):void => {
    if(carouselRef.current) {
      const visibleWidth = carouselRef.current.offsetWidth;
      const scrollAmount = direction === 'right' ? visibleWidth : -visibleWidth;
      carouselRef.current.scroll({left: scrollAmount})
    }
  }

  return (
    <div className={style.carousel}>
      <div className={style.carousel__showcase} ref={carouselRef}>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
        <div className={style.cardProva}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate eius, iure commodi 
        </div>
      </div>
      <div className={style.carousel__controls}>
        <strong className={style.arrow} onClick={() => (handleSliding('left'))}>&#8592;</strong>
        <strong className={style.arrow} onClick={() => (handleSliding('right'))}>&#8594;</strong>
      </div>
    </div>
  )
}