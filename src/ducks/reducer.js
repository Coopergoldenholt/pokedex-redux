import axios from "axios";

// * INITIAL STATE
const initialState = {
	username: "",
	isLoggedIn: false,
	pokemon: { results: [] },
	isLoading: false
};

// * ACTION CONSTANTS (NAMES)
const SET_USERNAME = "SET_USERNAME";
const LOGIN = "LOGIN";
const GET_POKEMON = "GET_POKEMON";

// * ACTION BUILDERS (ACTIONS CREATORS)
export const setUsername = username => {
	return {
		type: SET_USERNAME,
		payload: username
	};
};

export const login = () => {
	return {
		type: LOGIN
	};
};

export const getPokemon = url => {
	return {
		type: GET_POKEMON,
		payload: axios.get(url).then(res => res.data)
	};
};

// const action = {
//     type: 'whatever portion of state we want to change'
//     payload: 'whatever the value that we want to change'
// }

// * REDUCER FUNCTION
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERNAME:
			return { ...state, username: action.payload };
		case LOGIN:
			return { ...state, isLoggedIn: true };
		case GET_POKEMON + "_PENDING":
			return { ...state, isLoading: true };
		case GET_POKEMON + "_REJECTED":
			return { ...state, isLoading: false };
		case GET_POKEMON + "_FULFILLED":
			return { ...state, isLoading: false, pokemon: action.payload };

		default:
			return state;
	}
}
