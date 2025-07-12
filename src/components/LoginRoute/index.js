import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import "./index.css"

const LoginRoute=()=>{

    const setToken=()=>{
        Cookies.set("jwttoken","k",{
  expires: 7
})
    }


    return <div>
        <div className="login-card">
        <form onSubmit={setToken}  className="login-form" >
            <input className="login-input" type="text" placeholder="USER" />
            <input  className="login-input" type="text" placeholder="PASSWORD" />
            <button className="login-button" type="submit" >LOGIN</button>
            <p>Don't have an account? <Link to="/signup"><span>signup</span></Link></p>
            <Link to="/"><span>DashBoard</span></Link>
        </form></div>
</div>
}


export default LoginRoute