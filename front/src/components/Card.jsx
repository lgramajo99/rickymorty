import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from '../redux/actions'

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
   }, [myFavorites]);



   return (
      <div>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <button onClick={onClose}>X</button>

         <Link to={`/detail/${id}`} ><h2>{name}</h2></Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export default Card;