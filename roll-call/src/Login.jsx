import React from 'react';
import $ from 'jquery';
import './Login.css';
import {withRouter} from 'react-router';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      numberOfGuests: '',
    }
    this.onSumbitClick = this.onSumbitClick.bind(this);
  }

  onSumbitClick() {
    console.log('cicked')
    // $.ajax({
    //   type: 'POST',
    //   url: '/rsvps',
    //   data: {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, numberOfGuests: this.state.numberOfGuests},
    //   success: () => {
    //     console.log('yeet success');
    //   }
    // })
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
    this.setState({
      email: value,
    })
  }
  onGuestChange(value) {
    this.setState({
      numberOfGuests: value,
    })
  }

  render() {
    return (
      // Used MDN Docs for inputs to verify if entered/ if correctly entered an email
      <div>
        <h1 id="signUpLabel">
          Login to Roll Call
        </h1>
        <form action="" method="get" onSubmit={() => this.onSumbitClick()}>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="email" name="email" placeholder="Email" id="email" required onChange={(e) => { this.onEmailChange(e.target.value) }} />
          </div>
          <div >
            {/* <label htmlFor="email">Enter your email: </label> */}
            <input type="password" name="password" placeholder="Password" id="password" required onChange={(e) => { this.onEmailChange(e.target.value) }} />
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