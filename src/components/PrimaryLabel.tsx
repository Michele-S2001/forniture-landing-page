interface Text {
  text?: string
}

import style from '../styles/modules/primarylabel.module.scss';

export default function PrimaryLabel({ text = 'Testo non inserito' }: Text) {
  return <p className={style.primaryLabel}>{text}</p>
}