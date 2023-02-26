import Card from './Card';

function Cards({ characters }) {
   return (
      <div>
         {characters.map(({ id, name, species, gender, image }) => {
            return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => window.alert('Se cerro la card')}
            />
         }
         )}
      </div>
   );
}

export default Cards;