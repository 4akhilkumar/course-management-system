import React from 'react';

const Courses = (props) => {

  const CourseCard=({info})=>{
    const ViewCourseHandler=(e)=>{
      e.preventDefault()
      props.setCourse(info)
      props.setviewCoursesList(false)
      props.setViewCourses(true)
    }
    return (
      <div className="staff-profile-card">
                    <div className="staff-profile-img">
                    </div>
                    <div className="staff-profile-infos">
                      <div className="staff-profile-name">
                        <h2>{info.name}</h2>
                        <h4>{info.code}</h4>
                      </div>
                      <p className="staff-profile-text">
                        {info.description}
                      </p>
                      <ul className="staff-profile-stats">
                        <li>
                          <h3>2</h3>
                          <h4>Assignments</h4>
                        </li>
                        <li>
                          <h3>0</h3>
                          <h4>Projects</h4>
                        </li>
                      </ul>
                      <div className="staff-profile-links">
                        <button className="staff-profile-view" onClick={ViewCourseHandler}>
                          Show Course
                        </button>
                      </div>
                    </div>
                </div>
    )
  }

    return (
        <div>
            <section>
                <h3 className="section-head">Courses</h3>
            </section>
            <div className="list-all-faculty">
                
            {props.Courses.map((course,i)=><CourseCard info={course}/>)}


            </div>
        </div>
    );
}
export default Courses
