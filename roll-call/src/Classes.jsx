import React from 'react'
import ClassesCard from './ClassesCard'
import TeacherLandingNav from './TeacherLandingNav'
import './App.css';
import $ from 'jquery';


class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "n",
      arrOfClasses: []
    }
  }

  componentDidMount(){
    $.ajax({
      method:'GET',
      url: '/api/getClasses',
      success: (classes) => {
        this.setState({
          arrOfClasses: classes
        })
      }
    })
  }

  render() {
    console.log(this.state.arrOfClasses);
    const arrOfClassCards = this.state.arrOfClasses.map(ele => {
      console.log('ele', Object.values(this.state.arrOfClasses[0]));
      return (
        <ClassesCard 
          classTitle = {ele.classTitle}
          daysOfClass = {ele.daysOfClass}
          timeOfClass = {ele.timeOfClass}
          location = {ele.location}
          classId = {ele.id}
        />
      )
    })
    return (
      <section className="special_cource padding_top">
        <TeacherLandingNav />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2>All Classes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {arrOfClassCards}
          </div>
        </div>
      </section>
    )
  }

}


export default Classes;