import React from 'react';

class ClassesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classTitle, daysOfClass, timeOfClass, location, classImage, classId } = this.props;
    return (
      <div className="col-sm-6 col-lg-4">
        <div className="single_special_cource">
          <img src={classImage} className="special_img" alt="" />
          <div className="special_cource_text">
            <a href="course-details.html">
              <h3>{classTitle}</h3>
            </a>
            <p>{daysOfClass}</p>
            <p>{timeOfClass}</p>
            <p>Class ID: {classId}</p>
            <div className="author_info">
              <div >
                <div className="author_info_text">
                  <p>Location: </p>
                  <h5>{location}</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}


export default ClassesCard;