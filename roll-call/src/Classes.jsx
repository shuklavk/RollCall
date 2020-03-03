import React from 'react'
import ClassesCard from './ClassesCard'
import TeacherLandingNav from './TeacherLandingNav'
import './App.css';
import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "8h9wdatDrugd4YLMhWPGyDl-QL2UBQnSrJ3Sn3GKoaU",
  secret: "nxRA_GcpDwKOMpj19ltHwkQ52VTyaEnbM7pbz98tUvA"
});


class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: ""
    }
  }


  getImages(search, ind) {
    unsplash.search.photos(search, ind, 1, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        this.setState({ imgURL: json.results[0].urls.raw });
      });
  }

  render() {
    this.getImages('education', 2);
    return (
      <section className="special_cource padding_top">
        <TeacherLandingNav />
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-xl-5">
              <div class="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2>All Classes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ClassesCard
              classImage={this.state.imgURL}
              classTitle="AP Calculus"
              daysOfClass="MWF"
              timeOfClass="4:10 pm - 5:00 pm"
              location="41 24.2028, 2 10.4418"
              classId ={1}
            />

            
          </div>
        </div>
      </section>
    )
  }

}


export default Classes;