import {LOGO_URL} from "../utils/constant";
import {SHOPPING_CART_ICON} from "../utils/constant";   
import {useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus"
import {Link} from "react-router"

const Header = () => {

    const [btnName, setbtnName] = useState("Login")  
    const onlineStatus = useOnlineStatus()

    return (
      <div className="header">
        <div className="logo-container">
          <img
            alt="logoImg"
            src= {LOGO_URL}
          />
        </div>
        <div className="items-list">
          <ul>
            <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <img src={SHOPPING_CART_ICON} />  
              <button className="login-btn" onClick={()=>{
               btnName === "Login" ? setbtnName("Sign Up") : setbtnName("Login")
              }}> {btnName}</button> 
            </li>
          </ul>
         
        </div>
      </div>
    );
  };

  export default Header;