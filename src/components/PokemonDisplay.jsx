import React, {useState} from 'react'
import axios from 'axios'


const PokemonDisplay = () => {
    const [allPokemon, setAllPokemon] = useState({});



    const handleClick = e => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response =>  setAllPokemon(response.data.results))
            .catch( err => console.log(err));

        
    }

  return (
    <div>
        <input type="button" value="Fetch All Pokemon" onClick={handleClick} />
        {
            allPokemon.length > 0 && allPokemon.map((element, i) => {
                return (
                    <li key={i}>{element.name}</li>
                )
            })
            
        }
        

    </div>
  )

}

export default PokemonDisplay