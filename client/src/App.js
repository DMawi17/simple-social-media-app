import { Switch, Route } from "react-router-dom";
import "./app.scss";
import Menu from "./components/Menu";
import Home from "./components/users/Home";
import SignUp from "./components/users/SignUp";
import SignIn from "./components/auth/SignIn";
import Users from "./components/users/Users";
import Profile from "./components/users/Profile";
import EditProfile from "./components/users/EditProfile";
import DeleteUser from "./components/users/DeleteUser";

const App = () => {
    return (
        <div className="App">
            <Menu />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/user/:userId" component={Profile}></Route>
                    <Route
                        path="/user/edit/:userId"
                        component={EditProfile}
                    ></Route>
                    <Route path="/user/delete" component={DeleteUser}></Route>
                    <Route path="/auth/sign_up" component={SignUp}></Route>
                    <Route path="/auth/sign_in" component={SignIn}></Route>
                    <Route path="/users" component={Users}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
