export const addListener = () =>{
    return {
        type: 'ADD_LISTENERS'
        
    }
};

export const addEmitter = () =>{
    return {
        type: 'ADD_EMITTERS'
        
    }
};

export const removeListener = (index) =>{
    return {
        type: 'REMOVE_LISTENERS',
        payload:{
            key:index
        }
    }
};
 
export const removeEmitter = (index) =>{
    return {
        type: 'REMOVE_EMITTERS',
        payload:{
            key : index
        }
    }
};
