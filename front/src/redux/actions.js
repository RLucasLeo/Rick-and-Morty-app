import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => {
    return async function(dispatch){
        try {
            const response = await axios .post("http://localhost:3001/rickandmorty/favs", character);
            return dispatch ({
                type: ADD_FAVORITE,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
            return dispatch({
                type: "ERROR",
                payload: error,
            });
        }
    };
}

export const deleteFavorite = (id) =>{
    return async function(dispatch){
        try {
            const response = await axios .delete(`http://localhost:3001/rickandmorty/favs/${id}`);
            return dispatch({
                type: DELETE_FAVORITE,
                payload: response.data,})
        } catch (error) {
            console.log(error);
            return dispatch({
                type: "ERROR",
                payload: error,
            });
        }
        
    }
}

export const getFavorites = () =>{
    return async function(dispatch){
        try {
            const response = await axios .get(`http://localhost:3001/rickandmorty/favs/`);
            return dispatch({
                type: "GET_FAVORITES",
                payload: response.data,})
        } catch (error) {
            console.log(error);
            return dispatch({
                type: "ERROR",
                payload: error,});
        }
        
    }
}

export const filterCards = (gender) =>{
    return {type: FILTER, payload:gender }
}

export const orderCards = (id) => {
    return {type: ORDER, payload:id}
}