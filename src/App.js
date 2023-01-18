import './scss/index.scss';
import HeaderContainer from "./components/layout/Header/HeaderContainer";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";

function App(props) {
    return (
        <div className="app">
            <div className="app-container">
                <HeaderContainer className="app-container__header"/>
                <Sidebar className="app-container__sidebar"/>
                <Content
                    dispatch={props.dispatch}
                    data={props.data}/>
                <Footer className="app-container__footer"/>
            </div>
        </div>
    );
}

export default App;
