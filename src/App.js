import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomeWithOutLogin from './components/homeWithOutLogin/homeWithOutLogin';
import HomeWithLogin from './components/homeWithLogin/homeWithLogin';

class App extends React.Component {
  render() {
    const isLogin = localStorage.getItem("token") === null ? false : true;
    return (
      <div className="App">
        <Router>
          <Link to="/"><button>Home</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
          <Switch>
            {!isLogin && <Route path="/" exact component={HomeWithLogin} />}
            {isLogin && <Route path="/" exact component={HomeWithOutLogin} />}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
