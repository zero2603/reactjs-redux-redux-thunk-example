import {FETCH_POKEMONS} from '../actions/types';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case FETCH_POKEMONS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}