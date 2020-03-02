import React from 'react';
import $ from 'jquery';
import './Login.css';
import { withRouter } from 'react-router';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      arrOfLoginCredentials: [],
    }
    this.onSumbitClick = this.onSumbitClick.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/getLoginList',
      success: (message) => {
        console.log(message);
        this.setState({
          arrOfLoginCredentials: message
        })
      }
    })
  }

  onSumbitClick(e) {
    const {arrOfLoginCredentials, email, password} = this.state;
    if (Object.keys(arrOfLoginCredentials).indexOf(email) === -1 || arrOfLoginCredentials[email] !== password) {
      e.preventDefault();
      alert('Invalid Email and/or Password');
      return false;
    }
  }

  onPasswordChange(value) {
    this.setState({
      password: value,
    })
  }
  onEmailChange(value) {
    this.setState({
      email: value,
    })
  }


  render() {
    return (
      // Used MDN Docs for inputs to verify if entered/ if correctly entered an email
      <div>
        <h1 id="signUpLabel">
          Login to Roll Call
        </h1>
        <form action={'/teacher'} method="get" onSubmit={(e) => this.onSumbitClick(e)}>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="email" placeholder="Email" id="email" required onChange={(e) => { this.onEmailChange(e.target.value) }} />
          </div>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="password" placeholder="Password" id="password" required onChange={(e) => { this.onPasswordChange(e.target.value) }} />
          </div>
          <div >
            <input className='btn_1' type="submit" value="Login" />
          </div>
          <div id="alreadyUser">
            <h6>New User? <a href="/signup">Sign Up</a></h6>
          </div>
        </form>
      </div>
    )
  }
}

export default (Login);