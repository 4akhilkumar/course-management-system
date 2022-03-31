import React from 'react'
import Navbar from '../Navbar'
import { useState} from 'react'

const StudentDashboard=(props)=>{
const [viewCoursesList,setviewCoursesList]=useState(true)
const courseValues =[false]
const [viewCourses,setViewCourses]=useState(courseValues)
    return(
       <div>
           <Navbar
           username={props.username} 
           viewCoursesList={viewCoursesList} 
           setviewCoursesList={setviewCoursesList}
           viewCourses={viewCourses}
           setViewCourses={setViewCourses}
           Logout={props.Logout}
           />
       </div>
    )
}
export default StudentDashboard