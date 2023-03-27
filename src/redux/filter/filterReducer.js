import { STATUSFILTER } from "./action";

// create filter initial state

const initialState = {
    status: "All",
};

//  create filter reducer

const filterBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSFILTER:
            return {
                ...state,
                status: action.value,
            };

        default:
            return state;
    }
};



export default filterBookReducer;