import style from './SearchBar.module.css';
import { useState } from "react";

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className={style.searchBarContenedor}>
         <input className={style.inputSearch} type='search' value={character} onChange={handleChange} />
         <button className={style.btnSearch} onClick={() => onSearch(character)}>Agregar</button>
      </ div>
   );
}


export default SearchBar;