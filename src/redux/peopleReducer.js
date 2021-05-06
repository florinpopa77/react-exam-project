const initialState = {
    // Cart-ul va contine mai multe produse.
    employees: []
}

export function peopleReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_EMPL':
            return Object.assign({}, state, {
                employees: [
                    ...state.employees,
                    {
                        ...action.payload.empl
                    }
                ]
            })
        default:
            return state;
    }
}