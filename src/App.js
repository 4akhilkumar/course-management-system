import './App.css';
import React, { useState} from 'react'
import StudentDashBoard from './Components/StudentDashboard'
import CoursePageView from './Components/CoursePageView'
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
  if(StudentDashboardView===true)
  {
    return(
      <div>
        <StudentDashBoard 
        username={username}
        handleCourseClick={handleCourseClick}
        />
      </div>
    )
  }
  return(
    <div>
      <CoursePageView 
      setDefault={setDefault}
      />
    </div>
  )
  

}

export default App;
