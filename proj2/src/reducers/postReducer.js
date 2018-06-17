import { FETCH_ALL, FETCH_BY_NAME, FETCH_BY_TYPE } from '../actions/type';

 const initialState = {
    items : [],
    item : {}
};

export default function(state = initialState, action){
    console.log(action.type);
    switch(action.type)
    {
        case FETCH_ALL:
      
            return {
                ...state,
                items : action.payLoad
            };
        case FETCH_BY_NAME:
       
            return {
                ...state,
                items : action.payLoad
            };
        case FETCH_BY_TYPE:
      
            return {
                ...state,
                item :action.value,
                items : action.payLoad
            };
        default:
        console.log("not action reducer");
            return state;
    }
}