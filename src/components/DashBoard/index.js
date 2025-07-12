import {Component} from "react"
import Header from "../Header"
import AdminView from "../AdminView"
import "./index.css"
import UserView from "../UserView"
import OwnerView from "../OwnerView"
import HeaderSecond from "../HeaderSecond"

class DashBoard extends Component{
    constructor(props) {
        super(props);
        // state initialization
        this.state = {
          k: "user"
        };
      }

      changed=()=>{
        if (this.state.k==="user"){
            this.setState({k:"admin"})
        }
        if (this.state.k==="admin"){
            this.setState({k:"owner"})
        }
        if (this.state.k==="owner"){
            this.setState({k:"user"})
        }
    }

    render(){
        const {k}=this.state
        return <div className="dash">
            {k==="admin"?<Header/>:<HeaderSecond/>}
            <button onClick={this.changed} >ChangeView</button>
            <div className="dash-bottom">
            {k==="admin" && <AdminView/> }
            {k==="user" && <UserView/>}
            {k==="owner" && <OwnerView/> }
            </div>
           
        </div>
    }
}

export default DashBoard;