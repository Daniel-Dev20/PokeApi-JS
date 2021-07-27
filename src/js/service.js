


export const obtenerServicio = async(nombrePokemon) => {
    
    
            const urlPokemon =  `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

            const resp = await fetch(urlPokemon);

            console.log({resp});

            const {name, base_experience, sprites} = await resp.json();

            return {name, base_experience, sprites};

}

