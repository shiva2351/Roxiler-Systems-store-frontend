import { Link } from "react-router-dom"

const SignUp=()=>{


    return <div>
        <div className="login-card">
        <form  className="login-form" >
             <label htmlFor="user"> Name</label>
            <input id="user" className="login-input" type="text" placeholder="USER" />
            <label htmlFor="email">Email</label>
            <input id="email" className="login-input" type="text" placeholder="Email" />
            <label htmlFor="address">Address</label>
            <input id="address" className="login-input" type="text" placeholder="Address" />
            <label htmlFor="password">Password</label>
            <input id="password" className="login-input" type="text" placeholder="PASSWORD" />
            <button className="login-button" type="submit">SignUp</button>
            <p>Do have an account? <Link to="login"><span>Login</span></Link></p>
        </form></div>
</div>
}


export default SignUp