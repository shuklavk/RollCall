import React from 'react';
import $ from 'jquery';
import './SignUp.css';
import TeacherLandingNav from './TeacherLandingNav'
import Options from './Options'
import { withRouter } from 'react-router';


class ClassesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classTitle: '',
      daysOfClass: '',
      timeOfClass: '',
      location: '',
    }
    this.onSumbitClick = this.onSumbitClick.bind(this);
    // this.onTypeChosen = this.onTypeChosen.bind(this);
  }

  toDegreesMinutesAndSeconds(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + " " + minutes + " " + seconds;
  }

  convertDMS(lat, lng) {
    var latitude = this.toDegreesMinutesAndSeconds(lat);
    var latitudeCardinal = lat >= 0 ? "N" : "S";

    var longitude = this.toDegreesMinutesAndSeconds(lng);
    var longitudeCardinal = lng >= 0 ? "E" : "W";

    return latitude + " " + latitudeCardinal + ", " + longitude + " " + longitudeCardinal;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        let lat = this.convertDMS(position.coords.latitude, position.coords.longitude)
        console.log(lat);
        this.setState({
          location: lat
        })
      },
      err => console.log(err)
    );
  }

  onSumbitClick() {
    $.ajax({
      method: 'POST',
      url: '/api/newClass',
      data: {
        classTitle: this.state.classTitle,
        daysOfClass: this.state.daysOfClass,
        timeOfClass: this.state.timeOfClass,
        location: this.state.location,
      },
      success: (response) => {
        console.log(response);
      }
    })
  }

  onClassTitleChange(value) {
    this.setState({
      classTitle: value,
    })
  }
  onClassDaysChange(value) {
    this.setState({
      daysOfClass: value,
    })
  }
  // onEmailChange(value) {
  //   if (this.state.arrOfEmails.includes(value)) {
  //     alert('Email taken! Re-enter a new email');
  //     document.getElementById('email').value = '';
  //   } else {
  //     this.setState({
  //       email: value,
  //     })
  //   }
  // }
  onClassTimeChange(value) {
    this.setState({
      timeOfClass: value,
    })
  }

  // onTypeChosen(value) {
  //   // let newType = value || 'Student'
  //   this.setState({
  //     type: value
  //   })
  // }

  render() {
    return (
      // Used MDN Docs for inputs to verify if entered/ if correctly entered an email
      <div id="add">
        <TeacherLandingNav />
        <div style={{ paddingTop: "120px" }}>
          <h1 id="signUpLabel">
            Add Classes!
        </h1>
          <form action="/classes" method="get" onSubmit={() => this.onSumbitClick()}>
            <div >
              {/* <label htmlFor="firstName">Enter your first name: </label> */}
              <input type="text" id="classTitle" placeholder="Class Title" required onChange={(e) => { this.onClassTitleChange(e.target.value) }} />
            </div>
            <div >
              {/* <label htmlFor="lastName">Enter your last name: </label> */}
              <input type="text" placeholder="Days Of Class" id="daysOfClass" required onChange={(e) => { this.onClassDaysChange(e.target.value) }} />
            </div>
            <div >
              {/* <label htmlFor="email">Enter your email: </label> */}
              <input type="text" placeholder="Time Of Class" id="timeOfClass" required onChange={(e) => { this.onClassTimeChange(e.target.value)}} />
            </div>
            <div >
              {/* <label htmlFor="email">Enter your email: </label> */}
              <input type="text" placeholder="Location (leave empty for current location)" id="location" onChange={(e) => {}} />
            </div>
            <div >
              <input className='btn_1' type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default (ClassesAdd);