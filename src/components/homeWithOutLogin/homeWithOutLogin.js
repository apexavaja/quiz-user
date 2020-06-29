import React, {Component} from 'react';
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
      return <div className="component-home-with-out-login">Hello! component homeWithOutLogin</div>;
    }
  }
// export default connect(
//     ({ homeWithOutLogin }) => ({ ...homeWithOutLogin }),
//     dispatch => bindActionCreators({ ...homeWithOutLoginActions }, dispatch)
//   )( homeWithOutLogin );