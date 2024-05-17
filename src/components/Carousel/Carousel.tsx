import { useRef } from 'react'
import style from '../../styles/modules/carousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ children }) {

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
        {children}
      </div>
      <strong className={`${style.leftArrow} ${style.arrow}`} onClick={() => (handleSliding('left'))}>
        <FontAwesomeIcon icon={faLeftLong} />
      </strong>
      <strong className={`${style.rightArrow} ${style.arrow}`} onClick={() => (handleSliding('right'))}>
        <FontAwesomeIcon icon={faRightLong} />
      </strong>
    </div>
  )
}