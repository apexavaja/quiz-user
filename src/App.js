import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeWithOutLogin from './components/homeWithOutLogin';
import HomeWithLogin from './components/homeWithLogin';
class App extends React.Component {
  render() {
    const isLogin = localStorage.getItem("userLogin") === null ? false : true;
    if (isLogin === false) {
      return (
        <HomeWithOutLogin />
      )
    } else {
      return (
        <HomeWithLogin />
      )
    }
  }
}

export default App;
