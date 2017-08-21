const initialState = {
    items: {}
};

interface Action {
    type: string;
    payload: object;
}

export default function books(state = initialState, action: Action) {
    switch (action.type) {
        case "":
            return;
        default:
            return state;
    }
}
