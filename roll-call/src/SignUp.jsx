import React from 'react';
import $ from 'jquery';
import './SignUp.css';
import Options from './Options'
import {withRouter} from 'react-router';


class SignUp extends React.Component {
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
          Sign Up For Roll Call
        </h1>
        <form action="" method="get" onSubmit={() => this.onSumbitClick()}>
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
            <input type="password" name="password" placeholder="Password" id="password" required onChange={(e) => { this.onEmailChange(e.target.value) }} />
          </div>
          <div>
              <Options />
          </div>
          <div >
            <input className='btn_1' type="submit" value="Sign Up!" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);