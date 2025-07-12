import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Header =()=>{
    console.log("header")
    const removeJwt=()=>{
        Cookies.remove("jwttoken")
        console.log("jwt")
    }

    return <nav className="header">
        <Link to="login"><img className="logo-img" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1744529006/images_tj93cl.jpg" alt="logo" /></Link>
        <ul className="list">
           
           <li>
            <Link to="adduser">add-new-user</Link> 
           </li>
           <li>
            <Link onClick={removeJwt} to="login">Logout</Link>
             
           </li>
        </ul>
       
    </nav>
}

export default Header