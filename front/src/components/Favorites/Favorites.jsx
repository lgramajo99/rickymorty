import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch();


    const handlerOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handlerFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }


    return (
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select onChange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
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