import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    postsReducer,
    dialogsReducer,
    usersReducer
});

let store = createStore(reducers);

export default store;