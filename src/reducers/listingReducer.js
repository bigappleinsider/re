import { RECEIVE_LISTINGS } from '../actions/reActions';

export const initialState = {
    listings: []
};

const reducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case RECEIVE_LISTINGS: 
            return {
                ...state,
                listings: payload
            };
        
        default:
            return state;
    }
}

export default reducer;