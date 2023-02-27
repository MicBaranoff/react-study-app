import './scss/index.scss';
import HeaderContainer from "./components/layout/Header/HeaderContainer";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "./HOC/withRouter";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return (<div className={'loader'}>Loading...</div>)
        }
        return (
            <div className="app">
                <div className="app-container">
                    <HeaderContainer className="app-container__header"/>
                    <Sidebar className="app-container__sidebar"/>
                    <Content
                        dispatch={this.props.dispatch}
                        data={this.props.data}/>
                    <Footer className="app-container__footer"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
