import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({ characters, onClose }) {

   return (
      <div className={style.cardsContenedor }>
         {characters.map(({ id, name, species, gender, image }) => {
            return <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
            />
         })}
      </div>
   );
}

export default Cards;