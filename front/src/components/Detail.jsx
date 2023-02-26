import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Detail() {
    const { detailId } = useParams();
    // console.log(detailId);
    const [character, setCharacter] = useState({});


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) { setCharacter(char); }
                else { window.alert("No hay personajes con ese ID"); }
            })
            .catch((err) => { window.alert("No hay personajes con ese ID"); });

        return setCharacter({});
    }, [detailId]);

    return (
        <div>
            <h1>{character?.name}</h1>
            <img src={character?.image} alt={character?.name} />
            <h3>{character?.status}</h3>
            <h3>{character?.specie}</h3>
            <h3>{character?.gender}</h3>
            <h3>{character?.origin?.name}</h3>
        </div>
    )
}
export default Detail;