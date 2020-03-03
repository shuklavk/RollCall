import React, { Component } from 'react'
import './Pages.css'
import Upload from './upload/Upload'
import TeacherLandingNav from './TeacherLandingNav'
import UploadedFileList from './UploadedFileList'
import $ from 'jquery'

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrOfUploadedFiles: [],
    };
    this.getArrOfUploadedFiles = this.getArrOfUploadedFiles.bind(this);
  }

  getArrOfUploadedFiles(){
    $.ajax({
      method: 'GET',
      url: '/api/getUploadedFiles',
      success: (a) => {
        this.setState({
          arrOfUploadedFiles: a
        });
      }
    })
  }

  componentDidMount(){
    this.getArrOfUploadedFiles();
  }

  render() {
    return (
      <div>
        <div className="Pages">
        <TeacherLandingNav />
          <div className="Card">
            <Upload getArrOfUploadedFiles={() => {this.getArrOfUploadedFiles()}}/>
          </div>
          <UploadedFileList arrOfUploadedFiles ={this.state.arrOfUploadedFiles}/>
        </div>

      </div>
    )
  }
}

export default Pages