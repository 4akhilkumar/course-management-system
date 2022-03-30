import React from 'react';

const Courses = (props) => {

  const ViewCourseHandler=()=>{
    props.setviewCoursesList(false)
    props.setViewCourses([true])
  }


    return (
        <div>
            <section>
                <h3 className="section-head">Courses</h3>
            </section>
            <div className="list-all-faculty">
                <div className="staff-profile-card">
                    <div className="staff-profile-img">
                    </div>
                    <div className="staff-profile-infos">
                      <div className="staff-profile-name">
                        <h2>Techincal Skilling</h2>
                        <h4>@19TS1901</h4>
                      </div>
                      <p className="staff-profile-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nihil.
                      </p>
                      <ul className="staff-profile-stats">
                        <li>
                          <h3>11</h3>
                          <h4>Assignments</h4>
                        </li>
                        <li>
                          <h3>2</h3>
                          <h4>Projects</h4>
                        </li>
                      </ul>
                      <div className="staff-profile-links">
                        <button className="staff-profile-view" onClick={ViewCourseHandler}>View course</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses
