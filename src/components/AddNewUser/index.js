import { Link } from "react-router-dom"
import "./index.css"

const AddNewUser=()=>{


    return <div>
        <div className="login-card">
        <form  className="login-form" >
        <h3>Enter new user details</h3>
             <label htmlFor="user"> Name</label>
            <input id="user" className="login-input" type="text" placeholder="USER" />
            <label htmlFor="email">Email</label>
            <input id="email" className="login-input" type="text" placeholder="Email" />
            <label htmlFor="address">Address</label>
            <input id="address" className="login-input" type="text" placeholder="Address" />
            <label htmlFor="password">Password</label>
            <input id="password" className="login-input" type="text" placeholder="PASSWORD" />
            <Link to="/"><button className="login-button" type="submit">Add User</button>
            </Link>
        </form></div>
</div>
}


export default AddNewUser