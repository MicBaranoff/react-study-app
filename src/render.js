import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, updateNewPostTitle, updateNewPostText} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    addPost={addPost}
                    data={state}
                    updateNewPostTitle={updateNewPostTitle}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default renderApp;