import style from '../styles/modules/primarycard.module.scss'

interface cardProps {
  title: string;
  content: string;
  more: string;
  titleSize: 'normal' | 'large';
}

export default function PrimaryCard({ title, content, more, titleSize }: cardProps) {
  
  const getTitleSize = () => {
    switch (titleSize) {
      case 'normal':
        return style.normalFontSize
      case 'large':
        return style.largeFontSize
      default:
        return style.normalFontSize
    }
  }

  return (
    <div className={style.primaryCard}>
      <h4 className={`${style.primaryCard__title} ${getTitleSize()}`}>{title}</h4>
      <p className={style.primaryCard__content}>{content}</p>
      <div className={style.primaryCard__info}>
        <a aria-label='More info' href={more}>More info</a>
        <div className={style.arrowIcon}>&#8594;</div>
      </div>
    </div>
  )
}