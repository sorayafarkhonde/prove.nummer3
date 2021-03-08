import React,{useEffect, useState} from "react";
import {BrowserRouter as Router ,Link , Route,Redirect} from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import home from "./pages/home";
import admin from "./pages/admin";
import {AuthContext} from "./context/auth";
import Login from "./pages/Login";
//import logo from './logo.svg';
import './App.css';
import {Card, Form,Input,Button, Error,Pic} from "./components/AuthForm";
import {List} from "./components/List";
import {fetchData} from "./Utils/Api";

function App(props) {
  const [authTokens, setAuthTokens ]=useState();
  const [people,setPeople]=useState([])
  const setTokens=(data)=>{
    localStorage.setItem("tokens" , JSON.stringify(data));
    setAuthTokens(data);
  }
  useEffect(()=>{fetchData().then(response=>setPeople(response))});
  console.log(people[0])
  var user= localStorage.getItem("user")
  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens:setTokens}}>
    <Router>
      <div id="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin </Link>
          </li>
        </ul>
        <div id="userarea">
        <span>
          Hi {user}
        </span>
        <Card>
        <Form> 
        <Button onClick={logout}>logout</Button>
        </Form>
        </Card>
        </div>  
      </div>
      <div>
        <List people={people}/> 
      </div>
      <Route exact path="/" component={home}/>
      <Route path="/Login" component={Login}/>
      <PrivateRoute path="/admin" component={admin}/>
    </Router>
    </AuthContext.Provider>
  );
}
function logout(){
  alert("bye")
  localStorage.setItem("user", "")
  return(<Redirect to="/" />)
}
export default App;
