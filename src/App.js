import './App.css';
import '../src/Static/fontawesome/css/all.css'
import React, { useState} from 'react'
import StudentDashboard from './Components/Student/StudentDashboard';
const App=()=>{
  const [username, setUsername] = useState('Akhil')

  return(
    <div>
      <StudentDashboard username={username} />
    </div>
  )

}

export default App;
