import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    data={state}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
// store.subscribe(renderApp);
store.subscribe(() => {
    let state = store.getState();
    renderApp(state);
})
renderApp(store.getState());