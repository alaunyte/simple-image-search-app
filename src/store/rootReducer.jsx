import { combineReducers } from "redux";
import galleryReducer from "./modules/galleryStore/reducer";

export default combineReducers({ 
  queries: galleryReducer,
});