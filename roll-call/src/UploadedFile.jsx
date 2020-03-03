import React from 'react'

class UploadedFile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div class="comment-list">
          <div class="single-comment justify-content-between d-flex">
            <div class="user justify-content-between d-flex">
              <div class="thumb">
              <img src="https://img.icons8.com/nolan/128/document.png"/>
              </div>
              <div class="desc">
                <p class="comment">
                              </p>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h5>
                      <a href={this.props.documentLink}>{this.props.documentName}</a>
                    </h5>
                    <p class="date">{this.props.documentDate} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default UploadedFile