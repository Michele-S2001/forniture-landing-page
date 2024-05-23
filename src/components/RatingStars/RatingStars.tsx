import style from '../../styles/modules/ratingstars.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function RatingStars({ ratingNum }: {ratingNum: number | undefined}) {

  const stars = new Array(ratingNum).fill(null);

  return (
    <div role='group' aria-label={`Stars number: ${ratingNum}`} className={style.rating}>
      {stars.map((_, idx) => (
        <FontAwesomeIcon icon={faStar} key={idx}/>
      ))}
    </div>
  )
}
