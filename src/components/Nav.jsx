import SearchBar from "./SearchBar";

function Nav({ onSearch, randomCharacter }) {



    return (
        <div>
            <button onClick={randomCharacter} >🎈</button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;




