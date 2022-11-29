import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        dispatch={store.dispatch.bind(store)}
                        data={store}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
        );

window.store = store;
// store.subscribe(renderApp);
//store.subscribe(() => {
//    // let state = store.getState();
//    renderApp(store);
//})
