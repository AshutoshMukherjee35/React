import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const[buttonName , setbuttonName] = useState("Login");
    const changeName = () =>{
       if(buttonName === 'Login') {
        setbuttonName('Logout');
       } else {
        setbuttonName('Login');
       }
    }
    return(
      <>
      <link rel="preload" href={LOGO_URL} />
    <section className="header">       
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <nav className="nav-items">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Cart</a></li>
                <button className="nav-btn" onClick={changeName}>{buttonName}</button>
            </ul>
        </nav>     
    </section>
    </>
    );  
}

export default Header;