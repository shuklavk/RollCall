import React, { Component } from 'react'
import Dropzone from '../dropzone/Dropzone'
import Progress from '../progress/Progress'
import './Upload.css'
import '../App.css'

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1) Files Array to save all the files
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  // Function that adds files to array
  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src={require("../img/baseline-check_circle_outline-24px.svg")}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <li className="d-none d-lg-block">
          <button className="btn_1"
            onClick={() =>
              this.setState({ files: [], successfullUploaded: false })
            }
          >Clear</button>
        </li>
      );
    } else {
      return (
        <li className="d-none d-lg-block">
          <button className="btn_1"
            disabled={this.state.files.length < 0 || this.state.uploading}
            // 5) Render Actions calls upload files
            onClick={this.uploadFiles}
          >Upload</button>
        </li>
      );
    }
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      // 6) UploadFiles calls sendRequest for each file in the array
      promises.push(this.sendRequest(file));
    });
    try {
      // this.props.getArrOfUploadedFiles();
      await Promise.all(promises);
      this.props.getArrOfUploadedFiles();

      this.setState({ successfullUploaded: true, uploading: false });
      // this.props.getArrOfUploadedFiles();
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  endRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      const formData = new FormData();
      formData.append("file", file, file.name);

      req.open("POST", "http://localhost:5000/upload");
      req.send(formData);
    });
  }

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });
      // 7) sendRequest creates a FormData object with the file 
      const formData = new FormData();
      formData.append("file", file, file.name);

      // 8) Calls the /upload route in server and sends the formData (with the file)
      req.open("POST", "http://localhost:5000/upload");
      req.send(formData);
    });
  }

  render() {
    console.log(this.state.files)
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div>
            {/* 2) Dropzone Component adds files to files array  */}
            <Dropzone
            // takes in arr of files and concats with this.state.files
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">
        {/* 4) Render Actions is called */}
          {this.renderActions()}
        </div>
      </div>
    );
  }
}

export default Upload;
