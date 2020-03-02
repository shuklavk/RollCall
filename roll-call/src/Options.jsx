import React from 'react';
import './Options.css'

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: false
    }
  }

  onTeacherChecked(bool){
    if(bool){
      this.setState({
        teacher: true
      })
    }
    this.props.onTypeChosen('Teacher')

  }

  onStudentChecked(bool){
    if(bool){
      this.setState({
        teacher:false
      })
    }
    this.props.onTypeChosen('Student')
  }

  render() {
    return (

      <div className="cntr">
        <label htmlFor="opt1" className="radio">
          <input type="radio" name="rdo" id="opt1" className="hidden" onChange= {(e) => {this.onTeacherChecked(e.target.checked)}} />
          <span className="label"></span>Teacher
        </label>

        <label htmlFor="opt2" className="radio">
          <input type="radio" name="rdo" id="opt2" className="hidden" onChange= {(e) => {this.onStudentChecked(e.target.checked)}}/>
          <span className="label"></span>Student
        </label>
      </div>
    )
  }
}

export default Options;