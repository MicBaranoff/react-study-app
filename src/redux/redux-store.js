import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk'

console.log(thunk);
let reducers = combineReducers({
    postsReducer,
    dialogsReducer,
    usersReducer,
    profileReducer,
    authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;