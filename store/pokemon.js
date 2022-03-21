const GET_MEW = 'pokemon/GET_MEW';
const GET_POKEMON = 'pokemon/GET_POKEMON';

const getMew = mew => ({
    type: GET_MEW,
    mew
});

const getPokemon = pokemon => ({
    type: GET_POKEMON,
    pokemon
});

export const fetchPokemon = nameOrId => async dispatch => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    
    if(response.ok) {
        const pokemon = await response.json();
        dispatch(getPokemon(pokemon));
        return pokemon;
    }
}

export const fetchMew = () => async dispatch => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/151/');

    if (response.ok) {
        const mew = await response.json();
        dispatch(getMew(mew));
        return mew;
    }
}

export default function pokemonReducer(state = {}, action) {
    switch (action.type) {
        case GET_MEW:
            return { 151: action.mew };
        case GET_POKEMON:{
            const newState = {...state};
            newState[action.pokemon.id] = action.pokemon;
            return newState;
        }
        default:
            return state;
    }
}