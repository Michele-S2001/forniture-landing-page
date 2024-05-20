import style from '../../styles/modules/reviewcard.module.scss';

interface clientReview {
  id: number;
  image: string;
  name: string;
  city: string;
  textReview: string;
  clientRating: 1 | 2 | 3 | 4 | 5;
}

interface props {
  review: clientReview | null;
}

export default function ReviewCard({ review }: props) {
  return (
    <div className={style.reviewCard}>
      <div className={style.reviewCard__content}>
        <img 
          aria-hidden="true"
          className={style.userProfileImg} 
          src={review?.image} />
        <div>
          <h4 className={style.userProfileName}> {review?.name} </h4>
          <span className={style.userProfileCity}> {review?.city} </span>
        </div>
        <blockquote>&quot; {review?.textReview} &quot;</blockquote>
      </div>
    </div>
  )
}
