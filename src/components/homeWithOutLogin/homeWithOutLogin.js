import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './homeWithOutLogin.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeWithOutLoginActions from "../../store/homeWithOutLogin/actions";
export default class HomeWithOutLogin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
      <div className="component-home-with-out-login">
                          <Link to="/"><button>Home</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
      </div>
      );
    }
  }
// export default connect(
//     ({ homeWithOutLogin }) => ({ ...homeWithOutLogin }),
//     dispatch => bindActionCreators({ ...homeWithOutLoginActions }, dispatch)
//   )( homeWithOutLogin );