import pokemonReducer from './PokemonReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    pokemonReducer
});

export default rootReducer;
