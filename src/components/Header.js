import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
            </ul>
        </nav>     
    </section>
    </>
    );  
}

export default Header;