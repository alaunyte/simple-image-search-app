import { ADD_QUERY, DELETE_QUERY } from "./actionTypes";
import uniqid from "uniqid";

export const addQuery = (title) => ({
    type: ADD_QUERY,
    payload: {
        id: uniqid(),
        ...title
    }
});

export const deleteQuery = (id) => ({
    type: DELETE_QUERY,
    payload: {id}
})

export default { addQuery, deleteQuery}