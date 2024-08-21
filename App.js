import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./images/icon.png"
import usericon from "./images/usericon.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const NestedHeader = React.createElement("div",{className: "title"}, 
    [React.createElement("h1",{id: "heading-1"}, "I am h1 tag"), 
        React.createElement("h2", {id: "heading-2"}, "I am a h2 tag"),
            React.createElement("h3", {id: "heading-3"}, "I am a h3 tag")]);

const root = ReactDOM.createRoot(document.getElementById('root'));


// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice


const Header = () => {
    
        return (
            <section id="header">
            
              <a href="#">
                <img className="header-icon" src={icon} alt="Icon" />
              </a>
              <section className="input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input placeholder="Search" />
              </section>
              <a href="#">
                <img className="user-icon" src={usericon} alt="User Icon" />
              </a>
            </section>
          );
    
}

root.render(<Header />);