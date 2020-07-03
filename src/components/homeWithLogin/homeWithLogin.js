import React, { Component } from 'react';
import './homeWithLogin.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeWithLoginActions from "../../store/homeWithLogin/actions";
export default class HomeWithLogin extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return (
      <div>
        Welcome to dashboard!!
        <button onClick={localStorage.clear()}>Logout</button>
      </div>
    );
  }
}
// export default connect(
//     ({ homeWithLogin }) => ({ ...homeWithLogin }),
//     dispatch => bindActionCreators({ ...homeWithLoginActions }, dispatch)
//   )( homeWithLogin );