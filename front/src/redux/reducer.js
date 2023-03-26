import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
}


const reducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites:action.payload,
                allCharacters: action.payload,
                errors: {},
            }
        
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload,
                errors: {},
            }
        case "GET_FAVORITES":
            return{
                ...state,
                myFavorites: action.payload,
                errors: {},
            }
        case FILTER:
           
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            }
        
        case ORDER:
            return{
                ...state,
                myFavorites: 
                action.paylod === "Ascendente" ? state.allCharacters.sort((a, b)=> a.id - b.id)
                : state.allCharacters.sort((a, b)=> b.id - a.id )
            }
        
        case "ERROR":{
            return{
                ...state,
                errors: action.payload,
            }
        }

        default:
            return {...state}
    }
}


export default reducer;