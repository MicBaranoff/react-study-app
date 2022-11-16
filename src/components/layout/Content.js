import React from "react";
import Profile from '../../pages/Profile'
import Posts from '../../pages/Posts'
import Dialogs from "../../pages/Dialogs";
import Home from "../../pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const content = ({className, data, dispatch}) => {
    return (
        <div className={`content ${className}`}>
            <Routes>
                <Route path='/profile' element={<Profile data={'data'}/>}/>
                <Route path='/posts' element={<Posts
                    newPostTitle={data.postsReducer.newPostTitle}
                    newPostText={data.postsReducer.newPostText}
                    dispatch={dispatch}
                    data={data.postsReducer.posts}/>}/>
                <Route path='/dialogs/*' element={<Dialogs newMessage={data.dialogsReducer.newMessage}
                                                           dispatch={dispatch} data={data.dialogsReducer.list}/>}/>
                <Route index path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default content;