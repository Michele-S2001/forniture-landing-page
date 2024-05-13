import style from '../styles/modules/experiences.module.scss';
import PrimaryCard from './PrimaryCard';
import PrimaryLabel from './PrimaryLabel';

export default function Experiences() {

  const data = {
    title: 'We provide you the best experience',
    content: "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
    more: '#',
    titleSize: 'large'
  }

  return (
    <section className={`px-10 ${style['experiences-section']}`}>
      <div className="container">
        <div className={`${style.experiences} grid`}>
          <img className={style.experiences__image} src="./img/experience_sofa.jpg" alt="An orange sofa on a neutral white background"/>
          <div className={style.experiences__content}>
            <PrimaryLabel text='experiences'/>
            <PrimaryCard title={data.title} content={data.content} more={data.more} titleSize='large' />
          </div>
        </div>
      </div>
    </section>
  )
}