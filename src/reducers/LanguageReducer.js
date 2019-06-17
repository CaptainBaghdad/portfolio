const initialState = {};

const languageReducer = (state = initialState, action) =>{
    switch(action.type){
        case('NODE'): {
            return {...state}

        }

        default: 
        return state;
    }
}

export default languageReducer;