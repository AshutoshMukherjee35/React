import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const[buttonName , setbuttonName] = useState("Login");
    const changeName = () =>{
       if(buttonName === 'Login') {
        setbuttonName('Logout');
       } else {
        setbuttonName('Login');
       }
    }
    // console.log('Header rendered');
    useEffect(() => {
        // console.log('useEffect called');
    },[buttonName]);

    const onlineStatus = useOnlineStatus();
    return(
      <>
      <link rel="preload" href={LOGO_URL} />
    <section className="header">       
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <nav className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="#">Cart</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="nav-btn" onClick={changeName}>{buttonName}</button>
                {/* upon changing the state the header component is rerendered */}
            </ul>
        </nav>     
    </section>
    </>
    );  
}

export default Header;