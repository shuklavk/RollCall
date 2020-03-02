import React from 'react';

class TeacherLandingNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="collapse navbar-collapse main-menu-item justify-content-end"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">Classes</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cource.html">Students</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Pages
                                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="single-blog.html">Study Guides</a>
                          <a className="dropdown-item" href="elements.html">Lecture Notes</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">Sign Out</a>
                      </li>
                      <li className="d-none d-lg-block">
                        <a className="btn_1" href="#">+ New Class</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default TeacherLandingNav;