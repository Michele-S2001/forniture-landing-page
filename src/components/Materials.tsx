import style from '../styles/modules/materials.module.scss';
import PrimaryCard from './PrimaryCard';
import PrimaryLabel from './PrimaryLabel';

export default function Materials() {

  const data = {
    title: 'very serious materials for making furniture',
    content: "Because panto was very serious aout designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
    more: '#',
    titleSize: 'large'
  }

  return (
    <section className={`px-10 ${style['materials-section']}`}>
      <div className="container">
        <div className={`${style.materials} grid`}>
          <img className={style.materials__image} src="./img/home_designes.png" alt="A composition of 3 images of forniture like chairs and sofa"/>
          <div className={style.materials__content}>
            <PrimaryLabel text='materials'/>
            <PrimaryCard title={data.title} content={data.content} more={data.more} titleSize='large' />
          </div>
        </div>
      </div>
    </section>
  )
}
