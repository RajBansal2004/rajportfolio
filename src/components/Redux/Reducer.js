const INIT_STATE = {
    Loadstate: [],

};
export const cartreducer = (state = INIT_STATE, action) => {


    switch (action.type) {
        case "Load_State_Table":
            return { ...state, Loadstate: action.payload };
        default: return state
    }

}













