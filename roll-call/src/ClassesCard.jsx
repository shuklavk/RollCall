import React from 'react';
import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "8h9wdatDrugd4YLMhWPGyDl-QL2UBQnSrJ3Sn3GKoaU",
  secret: "nxRA_GcpDwKOMpj19ltHwkQ52VTyaEnbM7pbz98tUvA"
});

class ClassesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "",
    }
  }

  getImages(search, ind){
    unsplash.search.photos(search, 1,20, { orientation: "landscape" })
  .then(toJson)
  .then(json => {
    this.setState({imgURL: json.results[ind].urls.raw});
  });
  }

  render() {
    const { classTitle, daysOfClass, timeOfClass, location, classId } = this.props;
    this.getImages('education', classId)
    let classImage = this.state.imgURL;
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