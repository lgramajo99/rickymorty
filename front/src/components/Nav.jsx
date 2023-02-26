import SearchBar from "./SearchBar";

function Nav({ onSearch, randomCharacter }) {



    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={randomCharacter}>🎲</button>
        </div>
    )
}

export default Nav;




