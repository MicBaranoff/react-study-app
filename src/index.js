import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={state}>
                    <App
                        dispatch={store.dispatch.bind(store)}
                        data={state}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
// store.subscribe(renderApp);
store.subscribe(() => {
    // let state = store.getState();
    renderApp(store);
})
renderApp(store);