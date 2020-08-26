import { common } from "@material-ui/core/colors";


export const initialState = {
    basket:[],
    user:null,
  
};

const reducer=(state, action) =>{
    console.log(action);
    switch(action.type){
        case 'add to basket':
    //Logic for adding item to basket
    return {...state,
       basket: [...state.basket,action.item],
    };
    
    case 'Remove from basket':
        //Logic for Remove item from basket
        return {state};

    
        default:
            return state;

        
        }
}
export default reducer;