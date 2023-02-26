import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function Nav({ onSearch, randomCharacter }) {

    return (
        <div>
            <nav>
                <NavLink to={'/home'}>Home</NavLink>
                
                <NavLink to={'/about'}>About me</NavLink>
                
                < SearchBar onSearch={onSearch} />
                
                <button onClick={randomCharacter}>🎲</button>
            </nav>
        </div>
    )
}

export default Nav;




