import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    postsReducer,
    dialogsReducer,
    usersReducer,
    profileReducer,
    authReducer,
});

let store = createStore(reducers);

export default store;