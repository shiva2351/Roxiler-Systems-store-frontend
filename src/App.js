import { Switch,Route, Redirect } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginRoute from './components/LoginRoute';
import SignUp from './components/SignUp';
import './App.css';
import ChangePassword from './components/ChangePassword';
import AddNewUser from './components/AddNewUser';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashBoard} /> 
        <Route exact path="/adduser" component={AddNewUser} /> 
        <Route exact path="/password" component={ChangePassword} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={ LoginRoute } />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
