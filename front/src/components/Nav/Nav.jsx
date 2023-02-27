import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

function Nav({ logout, onSearch, randomCharacter }) {

    return (
        <nav className={style.navContenedor}>

            <NavLink className={style.navLink} activeClassName={style.activeNavLink} to={'/home'}>Home</NavLink>
            <NavLink className={style.navLink} activeClassName={style.activeNavLink} to={'/favorites'}>Favorites</NavLink>
            <NavLink className={style.navLink} activeClassName={style.activeNavLink} to={'/about'}>About me</NavLink>

            <SearchBar onSearch={onSearch} />

            <button className={style.navBtn} onClick={randomCharacter}>🎲</button>
            <button className={style.navBtn} onClick={logout}>Logout</button>
        </nav>
    )
}

export default Nav;
