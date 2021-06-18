import React from "react";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";

const Hero = ({handleLogout}) => {

    return(

        <section className="hero">
            {<nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>}
            <Nav />
            <ChatBody />
        </section>
    )
}
export default Hero;