import { Link } from "react-router-dom"
import "./index.css"

const ChangePassword=()=>{


    return <div>
        <div className="login-card">
        <form  className="login-form" >
            <input className="login-input" type="text" placeholder="Enter new password" />
            <input  className="login-input" type="text" placeholder="Confirm new password" />
            <Link to="/"><button className="login-button" type="submit">Reset</button></Link>
        </form></div>
</div>
}


export default ChangePassword