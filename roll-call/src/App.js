import React from 'react';
import {
  Link,
} from "react-router-dom";
import './App.css';


function App() {
  return (
      <div >
        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-6">
                <div className="banner_text">
                  <div className="banner_text_iner">
                    <h5>Every child yearns to learn</h5>
                    <h1>Motivating Students To Come To Class</h1>
                    <p>
                      A new way to raise grades. System to track the attendance/performance of students and reward
                      those who show up.
                  </p>
                    <Link to="/login">
                      <a href="#" className="btn_1">Log In </a>
                    </Link>
                    <Link to="/signup">
                      <button className="btn_2">Sign Up </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;