import React, { Component } from 'react'
import './Pages.css'
import Upload from './upload/Upload'
import TeacherLandingNav from './TeacherLandingNav'

class Pages extends Component {
  render() {
    return (
      <div className="Pages">
        <TeacherLandingNav />
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}

export default Pages