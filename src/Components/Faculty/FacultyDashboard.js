import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../Navbar'
import CourseService from '../../Services/CourseService'

const FacultyDashBoard=(props)=>{
    const [courses,setCourses]=useState(null)
    const [viewCoursesList,setviewCoursesList]=useState(true)
    const [viewCourses,setViewCourses]=useState(false)
    useEffect(() => {

        CourseService.getAllFacultyCourses(props.userid).then(response => {
            setCourses(response)
          })
        
      }, [props])
    return(
        
        <div>
            <Navbar
            userid={props.userid}
            username={props.username} 
            first_name={props.first_name}
            viewCourses={viewCourses}
            setViewCourses={setViewCourses}
            viewCoursesList={viewCoursesList} 
            setviewCoursesList={setviewCoursesList}
            Courses={courses?courses:[]}
            userType={'Faculty'}
            Logout={props.Logout}
            />
        </div>
     )
}
export default FacultyDashBoard