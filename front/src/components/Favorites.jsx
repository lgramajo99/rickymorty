import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { orderCards, filterCards } from "../redux/actions.js";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((character) => {
                    return (
                        <div>
                            <Link to={`/detail/${character.id}`} ><h2>{character.name}</h2></Link>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <img src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;