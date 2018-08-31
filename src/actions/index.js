import { FETCH_POKEMONS } from './types';
const axios = require('axios');

var data = [];

export const fetchPokemons = () => (dispatch) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(function (response) {
            dispatch({
                type: FETCH_POKEMONS,
                payload: response.data.results
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
} 