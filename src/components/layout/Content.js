import React from "react";
import Profile from '../../pages/Profile'
import Posts from '../../pages/Posts'
import Dialogs from "../../pages/Dialogs";
import Home from "../../pages/Home";
import UsersContainer from "../../pages/Users/UsersContainer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const content = ({className, data, dispatch}) => {
    const postData = data.getState().postsReducer;
    const dialogsData = data.getState().dialogsReducer;
    return (
        <div className={`content ${className}`}>
            <Routes>
                <Route path='/profile' element={<Profile data={'data'}/>}/>
                <Route path='/posts' element={<Posts
                    newPostTitle={postData.newPostTitle}
                    newPostText={postData.newPostText}
                    dispatch={dispatch}
                    data={postData.posts}/>}/>
                <Route path='/dialogs/*' element={<Dialogs newMessage={dialogsData.newMessage}
                                                           dispatch={dispatch} data={dialogsData.list}/>}/>
                <Route index path='/users' element={<UsersContainer/>}/>
                <Route index path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default content;