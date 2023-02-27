   import { Link } from "react-router-dom";
   import { useDispatch, useSelector } from 'react-redux';
   import { useEffect, useState } from "react";
   import { addFavorite, deleteFavorite } from '../../redux/actions'
   import style from './Card.module.css'

   function Card({ id, gender, image, name, onClose, species }) {
      const dispatch = useDispatch()
      const myFavorites = useSelector(state => state.myFavorites)
      const [isFav, setIsFav] = useState(false);

      const handleFavorite = () => {
         if (isFav) {
            setIsFav(false);
            dispatch(deleteFavorite(id));
         } else {
            setIsFav(true);
            dispatch(addFavorite({ id, gender, image, name, onClose, species }))
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [id, myFavorites]);

      return (
         <div className={style.cardContenedor}>
            {isFav
               ? (<button className={style.cardBtn} onClick={handleFavorite}>❤️</button>)
               : (<button className={style.cardBtn} onClick={handleFavorite}>🤍</button>)
            }

            <button className={style.cardBtn} onClick={onClose}>X</button>

            <Link className={style.cardLink} to={`/detail/${id}`}><h3 className={style.cardH3}>{name}</h3></Link>
            <h3 className={style.cardH3}>{species}</h3>
            <h3 className={style.cardH3}>{gender}</h3>
            <img className={style.cardImg} src={image} alt={name} />
         </div>
      );
   }

   export default Card;