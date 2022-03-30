import './App.css';

import '../src/Static/fontawesome/css/all.css'

import React, { useState} from 'react'
import StudentDashBoard from './Components/StudentDashboard'
import CoursePageView from './Components/CoursePageView'
import Navbar from './Components/Navbar'
import Courses from '../src/Components/Courses/courses.js'

const App=()=>{
  const [username, setUsername] = useState('Mohan Vamsi')
  const [StudentDashboardView, setStudentDashboardView] = useState(true)
  const [CourseView, setCourseView] = useState(false)
  const handleCourseClick = async(event) => {
    event.preventDefault()
    setCourseView(true)
    setStudentDashboardView(false)
  }
  const setDefault=()=>{
    setCourseView(false)
    setStudentDashboardView(true)
  }
  return(
    <div>
      <Navbar/>
      {/* <Courses/> */}
    </div>
  )

}

export default App;
