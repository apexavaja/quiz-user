import React, { Component } from 'react';
import {Redirect  } from 'react-router-dom';
import Axios from 'axios';
import API from '../../config';
import './login.css'
import HomeWithOutLogin from '../homeWithOutLogin/homeWithOutLogin';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const packet = {
      userName: this.state.userName,
      password: this.state.password
    }

    try {
      const {data} = await Axios.post(API + '/user/login', packet);
      if(data.isBoom === true){
        console.log(data.output.payload.message);
        document.getElementById("msg").innerHTML = data.output.payload.message;
      }else{
        console.log(data.token);
        localStorage.setItem("token",data.token);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }

  }

  render() {
    if( localStorage.getItem("token") !== null ){
      return (<Redirect to='/' />);
    }else
    return (
      <div className="component-login">
        <HomeWithOutLogin />
        <h1>Login</h1>
        <h2 id="msg"></h2>
        <form>
          Username: <input
            type="text"
            onChange={e => this.setState({ userName: e.target.value })}
            value={this.state.userName}
            required />
          <br />
          Password: <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.vale}
            requered />
          <br />
          <button onClick={this.handleSubmit}>Login</button>
        </form>

      </div>
    );
  }
}
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );