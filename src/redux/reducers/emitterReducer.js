const initialState= {
    emitterArray:[]
}
var numberOfEmitters = 0
export const emitterReducers = (state=initialState,action) =>{

    if(action.type === 'ADD_EMITTERS') {
        numberOfEmitters +=1 ;
        return {...state,
            emitterArray : [...state.emitterArray,{key:numberOfEmitters}]
        };
    }else if (action.type === 'REMOVE_EMITTERS') {
        var {emitterArray} = {...state};
        console.log(action.payload);
        
        var removedArray = emitterArray.filter((element) =>{
            return element.key != action.payload.key;
        });
        
        return {...state,
            emitterArray:[...removedArray]
        };
    } else {
        return state;
    }






}