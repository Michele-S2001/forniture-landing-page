import PrimaryLabel from "../../Label/PrimaryLabel";
import style from '../../../styles/modules/testimonials.module.scss';
import ReviewCard from "../../Cards/ReviewCard";
import Carousel from "../../Carousel/Carousel";
import clientReviews from "../../../staticData/clientReviewsData";

export default function Testimonials() {
  return (
    <section className={`px-10 ${style['testimonials-section']}`}>
      <div className="container">
        <div className={style.testimonials}>
          <PrimaryLabel text="testimonials"/>
          <h2 className={style.testimonials__title}>our client reviews</h2>
          <Carousel>
            {clientReviews.map(el => (
              <ReviewCard review={el} key={el.id}/>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
