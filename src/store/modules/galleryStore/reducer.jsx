import { ADD_QUERY, DELETE_QUERY } from "./actionTypes";

const store = {
    queries: []
}

export default function(state = store, action) {
    switch (action.type) {
        case ADD_QUERY:
            return {
                queries: [...state.queries, action.payload]
            };

        case DELETE_QUERY:
            return {
                queries: state.queries.filter(({id}) => id !== action.payload.id)
            };
        default:
            return state;
    }
}