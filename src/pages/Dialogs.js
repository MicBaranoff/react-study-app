import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "../components/DialogItem"
import ChatContainer from "../components/Chat/ChatContainer";

const dialogs = (props) => {
    const dialogs = props.data;
    return (
        <div className="dialogs-container">
                <div className="dialogs-row">
                    <section className="discussions">
                        <div className="discussion search">
                            <div className="searchbar">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <input type="text" placeholder="Search..."></input>
                            </div>
                        </div>
                        {
                            dialogs.map((item, index) =>
                                <DialogItem key={index} avatar={item.avatar} name={item.name} id={item.id}></DialogItem>)
                        }
                    </section>
                    <ChatContainer newMessage={props.newMessage} dispatch={props.dispatch} data={ dialogs[0].chat}></ChatContainer>
                </div>

            </div>
    )
}

export default dialogs;