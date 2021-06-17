import React, { Component} from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import UserProfile from "../userProfile/UserProfile";
import "./chatBody.css";

export default class ChatBody extends Component {
    render() {
        return (
        <div className="main_chatbody">
            <ChatList />
            <ChatContent />
            <UserProfile />
        </div>
        );
    }
}