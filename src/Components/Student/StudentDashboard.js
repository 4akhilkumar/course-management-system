import React from 'react'
import Navbar from '../Navbar'
import { useState,useEffect} from 'react'
import CourseService from '../../Services/CourseService'

const StudentDashboard=(props)=>{
    const [courses,setCourses]=useState(null)
    const [viewCoursesList,setviewCoursesList]=useState(true)
    const [viewCourses,setViewCourses]=useState(false)
    useEffect(() => {

        CourseService.getAllStudentCourses(props.userid).then(response => {
            setCourses(response)
          })
        
      }, [props])


    return(
        
       <div>
           <Navbar
           userid={props.userid}
           username={props.username} 
           first_name={props.first_name}
           viewCoursesList={viewCoursesList} 
           setviewCoursesList={setviewCoursesList}
           viewCourses={viewCourses}
           setViewCourses={setViewCourses}
           Courses={courses?courses:[]}
           userType={'Student'}
           Logout={props.Logout}
           />
       </div>
    )
}
export default StudentDashboard