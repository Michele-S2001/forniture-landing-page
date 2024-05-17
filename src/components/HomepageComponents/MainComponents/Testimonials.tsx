import PrimaryLabel from "../../Label/PrimaryLabel";
import style from '../../../styles/modules/testimonials.module.scss';

export default function Testimonials() {
  return (
    <section className={`px-10 ${style['testimonials-section']}`}>
      <div className="container">
        <div className={style.testimonials}>
          <PrimaryLabel text="testimonials"/>
          <h2 className={style.testimonials__title}>our client reviews</h2>
        </div>
      </div>
    </section>
  )
}
