import style from '../styles/modules/benefits.module.scss'
import PrimaryCard from './PrimaryCard'
import { card } from '../interfaces/MyInterfaces';

export default function Benefits() {

  const advantages: card[] = [
    {
      title: 'luxury facilities',
      content: 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities',
      info: '#'
    },
    {
      title: 'affordable price',
      content: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
      info: '#'
    },
    {
      title: 'many choices',
      content: 'We provide many unique work space chooices so that you can choose the workspace to your liking',
      info: '#'
    }
  ]

  return (
    <section className={`px-10 ${style.benefits}`}>
      <div className="container">
        <div className={style.benefits__wrapper}>
          <h3 className={style.title}>Why Choosing Us</h3>
          {advantages.map((el, idx) => (
            <PrimaryCard key={idx} title={el.title} content={el.content} more={el.info} titleSize='normal' />
          ))}
        </div>
      </div>
    </section>
  )
}