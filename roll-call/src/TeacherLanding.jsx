import React from 'react';
import './App.css';
import TeacherLandingNav from './TeacherLandingNav';


class TeacherLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TeacherLandingNav />

        <section className="learning_part">
          <div className="container">
            <div className="row align-items-sm-center align-items-lg-stretch">
              <div className="col-md-7 col-lg-7">
                <div className="learning_img">
                  <img src={require("../src/img/learning_img.png")} alt="" />
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="learning_member_text">
                  {/* <h5>About us</h5> */}
                  <h2>Sort through you classes</h2>
                  <p>Organizes each class you teach. Keeps a log of all enrolled students and maintains
                    their attendance records. Has ability to drop different documents to different classes.
                    </p>
                  {/* Moniter each student's success seperately or hone 
                      in a specific student's perfomce */}
                  {/* <ul>
                      <li><span className="ti-pencil-alt"></span>Him lights given i heaven second yielding seas
                                gathered wear</li>
                      <li><span className="ti-ruler-pencil"></span>Fly female them whales fly them day deep given
                                night.</li>
                    </ul> */}
                  <a href="/classes" className="btn_1">Classes</a>
                </div>

              </div>

            </div>
          </div>
        </section>
        
        {/* -----------------------------------------------Bottom Half---------------------------------------------- */}
        

        <section className="learning_part2">
          <div className="container">
            <div className="row align-items-sm-center align-items-lg-stretch">
              <div className="col-md-6 col-lg-6">
                {/* <div className="learning_img">
                  <img src={require("../src/img/learning_img.png")} alt="" />
                </div> */}
                <div className="learning_member_text">
                  {/* <h5>About us</h5> */}
                  <h2 id="extra">Upload Vital Documents</h2>
                  <p> Upload documents such as lecture notes and study guides.
                    Sort each document to each class.
                    </p>
                  {/* Moniter each student's success seperately or hone 
                      in a specific student's perfomce */}
                  {/* <ul>
                      <li><span className="ti-pencil-alt"></span>Him lights given i heaven second yielding seas
                                gathered wear</li>
                      <li><span className="ti-ruler-pencil"></span>Fly female them whales fly them day deep given
                                night.</li>
                    </ul> */}
                  <a href="/pages" className="btn_1">Pages</a>
                </div>

              </div>
              <div className="col-md-6 col-lg-6" id="extra2">
                <div className="learning_member_text">
                  {/* <h5>About us</h5> */}
                  <h2>Monitor Student Performance</h2>
                  <p>Analyze each student's success or failures seperately or hone 
                      in a specific student's perfomance
                    </p>
                  {/* Moniter each student's success seperately or hone 
                      in a specific student's perfomce */}
                  {/* <ul>
                      <li><span className="ti-pencil-alt"></span>Him lights given i heaven second yielding seas
                                gathered wear</li>
                      <li><span className="ti-ruler-pencil"></span>Fly female them whales fly them day deep given
                                night.</li>
                    </ul> */}
                  <a href="/students" className="btn_1">Students</a>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default TeacherLanding;