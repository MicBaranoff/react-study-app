import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    postsReducer,
    dialogsReducer,
});

let store = createStore(reducers);

export default store;