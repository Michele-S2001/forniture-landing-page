import style from '../../../styles/modules/searchbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Searchbar() {

  const [input, setInput] = useState<string>('');

  return (
    <div className={style.searchWrapper}>
      <input
        aria-label='
        Write any type of furniture'
        className={style.searchInput}
        type="text"
        placeholder="Search furniture"
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
      />
      <button aria-label='Search' className={style.searchBtn}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}