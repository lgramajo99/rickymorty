import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function Nav({ logout, onSearch, randomCharacter }) {

    return (
        <div>
            <nav>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/favorites'}>Favorites</NavLink>
                <NavLink to={'/about'}>About me</NavLink>
                < SearchBar onSearch={onSearch} />
                <button onClick={randomCharacter}>🎲</button>
                <button onClick={logout}>Logout</button>
            </nav>
        </div>
    )
}

export default Nav;
