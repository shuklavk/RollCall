import React from 'react';
import UploadedFile from './UploadedFile'
class UploadedFileList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arrOfUploadedFiles } = this.props;
    let arrOfUploadedFileComponent = arrOfUploadedFiles.map (ele => {
      return <UploadedFile documentName= {ele.documentName} documentDate={JSON.parse(ele.uploadTime)} documentLink = {ele.documentLink}/>
    })
    return (
      <div className="comments-area">
        <h2>Uploaded Files</h2>
        {/* <UploadedFile documentName={'Document 1sdfkndskjfndsjknsdksnkjfsdvjkfnkvd'} documentDate={'March 4, 2020 at 3:12 pm'} documentLink={"https://img.icons8.com/nolan/128/document.png"}/>
        <UploadedFile documentName={'Document 2'} documentDate={'February 4, 2020 at 3:12 pm'} documentLink={"https://google.com"}/>
        <UploadedFile documentName={'Document 3'} documentDate={'Decemeber 4, 2020 at 3:12 pm'} documentLink={"https://google.com"}/> */}
        {arrOfUploadedFileComponent}
      </div>
    )
  }
}


export default UploadedFileList;