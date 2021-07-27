import { obetenerTodosPokemons, obtenerServicio } from "./service";


const divHtml  = document.querySelector('.contenedor-div');
const txtInput = document.querySelector('.input');
const btn      = document.querySelector('.btn');
let divInfoPokemon;
let nombrePokemon;



const crearHtml = () => {

    const html = `
            <div class="contenedor-div">
               
                
                    
            </div>
           
    `;

    const div = document.createElement('div');

    div.innerHTML = html;
    divHtml.append( div);

    divInfoPokemon = document.querySelector('.contenedor-div');
}

const eventos = () => {

    txtInput.addEventListener('keyup', async(event) => {

        nombrePokemon = txtInput.value;

       if(event.keyCode === 13 && txtInput.value.length > 0){
        
        try {
            
            const resp = await obtenerServicio(nombrePokemon);

            console.log({resp});

            crearhtmlPokemon(resp)

            txtInput.value = "";

            return resp;
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se encontro un pokémon con ese nombre',
              })
              txtInput.value = '';
        }

          
       }
    })

    
    btn.addEventListener('click', async() => {

        try {
            
            const valor = nombrePokemon;
    
            console.log({valor});
    
            const pokemon = await obtenerServicio(valor);
    
            crearhtmlPokemon(pokemon);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se encontro un pokémon con ese nombre',
              });

              txtInput.value = '';
        }
    })

}

const crearhtmlPokemon = (pokemon) => {

    const html = `

            <div>
            <img src="${pokemon.sprites.front_default}" class="img-service">
            <p class="info-pokemon">
            
             ${pokemon.name} <br/>
            
            Base: ${pokemon.base_experience}
            
            </p>
            
            
            
            </div>
    
    `

    const div = document.createElement('div');
    div.classList.add('div-info')
    div.innerHTML = html;

    divInfoPokemon.append(div);
}




export const init = async() => {

    crearHtml();
     eventos();

    
}