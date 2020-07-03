import React, { Component } from 'react';
import Axios from 'axios';
import API from '../../config';
import './register.css'
import HomeWithOutLogin from '../homeWithOutLogin/homeWithOutLogin';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class Register extends Component {
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
      const {data} = await Axios.post(API + '/user', packet);
      if(data.isBoom === true){
        console.log(data.output.payload.message);
        document.getElementById("msg").innerHTML = data.output.payload.message;
      }else{
        console.log(data.data);
        document.getElementById("msg").innerHTML = "You are registred succesfully!!";
      }
    } catch (err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div className="component-register">
        <HomeWithOutLogin />
        <h1>Register</h1>
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
          <button onClick={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}
// export default connect(
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );