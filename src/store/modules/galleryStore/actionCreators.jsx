import { ADD_QUERY, DELETE_QUERY } from "./actionTypes";
import uniqid from "uniqid";

export const addQuery = (newQueryData) => ({
    type: ADD_QUERY,
    payload: {
        id: uniqid(),
        newQueryData
    }
});

export const deleteQuery = (id) => ({
    type: DELETE_QUERY,
    payload: {id}
})

export default { addQuery, deleteQuery}