import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Display from "./Components/Display";
import Header from "./Components/Header";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const App = () => {
  const [{}, dispatch] = useStateValue();
  {
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        console.log("The User is ==> ", authUser);
        if (authUser) {
          //if the user is logged in or was logged on
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          //the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/main">
            <Header />
            <Display />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
