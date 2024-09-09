import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


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

    //Context in function based component
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)


    return(
      <div className="bg-red-300">
      <link rel="preload" href={LOGO_URL} />
    <section className="flex justify-between">       
        <div className="logo-container">
            <img className="w-56" src={LOGO_URL} alt="logo" />
        </div>
        <nav className="flex items-center">
            <ul className="flex">
                <li className="m-8">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="m-8"><Link to="/">Home</Link></li>
                <li className="m-8"><Link to="/about">About us</Link></li>
                <li className="m-8"><Link to="/contact">Contact Us</Link></li>
                <li className="m-8"><Link to="#">Cart</Link></li>
                <li className="m-8"><Link to="/grocery">Grocery</Link></li>
                <button className="m-8 nav-btn" onClick={changeName}>{buttonName}</button>
                {/* upon changing the state the header component is rerendered */}
                <li className="m-8 font-bold">{loggedInUser}</li>
            </ul>
        </nav>     
    </section>
    </div>
    );  
}

export default Header;