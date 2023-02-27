import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import style from './Favorites.module.css';

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

            <select className={style.selectFav} onChange={handlerOrder} defaultValue="order">
                <option className={style.optionFav} value="order" disabled='disabled'>Order By</option>
                <option className={style.optionFav} value="Ascendente">Ascendente</option>
                <option className={style.optionFav} value="Descendente">Descendente</option>
            </select>

            <select className={style.selectFav} onChange={handlerFilter} defaultValue="filter">
                <option className={style.optionFav} value="filter" disabled='disabled'>Filter By</option>
                <option className={style.optionFav} value="Male">Male</option>
                <option className={style.optionFav} value="Female">Female</option>
                <option className={style.optionFav} value="Unknown">Unknown</option>
                <option className={style.optionFav} value="Genderless">Genderless</option>
            </select>

            <div className={style.favContenedor}>
                {
                    myFavorites.map((character) => {
                        return (
                            <div className={style.CardContenedor}>
                                <Link className={style.linkFav} to={`/detail/${character.id}`} ><h3 className={style.h3Fav} >{character.name}</h3></Link>
                                <h3 className={style.h3Fav} >{character.species}</h3>
                                <h3 className={style.h3Fav} >{character.gender}</h3>
                                <img className={style.imgFav} src={character.image} alt={character.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;