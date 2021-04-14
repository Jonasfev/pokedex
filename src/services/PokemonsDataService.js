import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

 class PokemonDataService{
    retrieveAllPokemons(){
        return axios.get(`${API_URL}pokemon?limit=898&offset=0`);
        
    }

    retrieveAllPokemonsTypes(number){
        return axios.get(`${API_URL}pokemon-form/`+number);
    }
}



export default new PokemonDataService();
