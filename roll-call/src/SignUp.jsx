import React from 'react';
import $ from 'jquery';
import './SignUp.css';
import Options from './Options'
import { withRouter } from 'react-router';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      type: 'Student',
      arrOfEmails: [],
    }
    this.onSumbitClick = this.onSumbitClick.bind(this);
    this.onTypeChosen = this.onTypeChosen.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/getEmailList',
      success: (message) => {
        this.setState({
          arrOfEmails: message
        })
      }
    })
  }

  onSumbitClick() {
    $.ajax({
      method: 'POST',
      url: '/api/newUser',
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        type: this.state.type,
      },
      success: (response) => {
        console.log(response);
      }
    })
  }

  onFirstNameChange(value) {
    this.setState({
      firstName: value,
    })
  }
  onLastNameChange(value) {
    this.setState({
      lastName: value,
    })
  }
  onEmailChange(value) {
    if (this.state.arrOfEmails.includes(value)) {
      alert('Email taken! Re-enter a new email');
      document.getElementById('email').value = '';
    } else {
      this.setState({
        email: value,
      })
    }
  }
  onPasswordChange(value) {
    this.setState({
      password: value,
    })
  }

  onTypeChosen(value) {
    // let newType = value || 'Student'
    this.setState({
      type: value
    })
  }

  render() {
    return (
      // Used MDN Docs for inputs to verify if entered/ if correctly entered an email
      <div>
        <h1 id="signUpLabel">
          Sign Up For Roll Call
        </h1>
        <form action="/login" method="get" onSubmit={() => this.onSumbitClick()}>
          <div >
            {/* <label htmlFor="firstName">Enter your first name: </label> */}
            <input type="text" name="firstName" id="firstName" placeholder="First Name" required onChange={(e) => { this.onFirstNameChange(e.target.value) }} />
          </div>
          <div >
            {/* <label htmlFor="lastName">Enter your last name: </label> */}
            <input type="text" name="lastName" placeholder="Last Name" id="lastName" required onChange={(e) => { this.onLastNameChange(e.target.value) }} />
          </div>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="email" name="email" placeholder="Email" id="email" required onChange={(e) => { this.onEmailChange(e.target.value) }} />
          </div>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="password" name="password" placeholder="Password" id="password" required onChange={(e) => { this.onPasswordChange(e.target.value) }} />
          </div>
          <div>
            <Options onTypeChosen={this.onTypeChosen} />
          </div>
          <div >
            <input className='btn_1' type="submit" value="Sign Up!" />
          </div>
          <div id="alreadyUser">
            <h6>Already an user? <a href="/login">Login</a></h6>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);