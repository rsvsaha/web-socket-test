
const initialState = {
    listenerArray:[],
}
var numberOfListeners = 0;
export const listenerReducers = (state=initialState,action)=>{
    if(action.type === 'ADD_LISTENERS') {
        numberOfListeners+=1;
        return {
            ...state,
            listenerArray : [...state.listenerArray,{key:numberOfListeners}]
        }
    }else if(action.type === 'REMOVE_LISTENERS') {
        
        var {listenerArray} = {...state};
        console.log(action.payload);
        
        var removedArray = listenerArray.filter((element) =>{
            return element.key != action.payload.key;
        });
        console.log(removedArray);
        return {
            ...state,
            listenerArray : [...removedArray]
        }
    } 
    else {
        // console.log(state);
        return state;
    }

}