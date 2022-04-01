import './App.css';
import '../src/Static/fontawesome/css/all.css'
import React, { useState , useEffect} from 'react'
import StudentDashboard from './Components/Student/StudentDashboard';
import LoginForm from '../src/Components/Login/LoginForm'
import SignInService from './Services/SignInService';
const App=()=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user,setUser] = useState(null)
  const [errorMessage,setErrorMessage]=useState(null)

    useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('LoggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      // CourseService().then(response => {
      //   setCourses(response)
      // })
      // console.log(courses)  
    }
  }, [])

  const handleLogin = async(event) => {
    event.preventDefault()
    try {
      const user = await SignInService({
        username, password,
      })
    //  const response=await CourseService()
    //  setCourses(response)
      // console.log(user.user)
      if(user)
      {
      window.localStorage.setItem('LoggedInUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
      }
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setUsername('')
      setPassword('')
      setTimeout(() => {
      setErrorMessage(null)
      }, 5000)
    }
  }
  const Logout=() => {
    window.localStorage.removeItem('LoggedInUser')
    setUser(null)

  }

 
  if(user===null){
  return(
    <div>
      
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
      <h3 align='center'>{errorMessage}</h3>
    </div>
  )
  }
  else if(user.user.group==="Student"){
    return(
      <StudentDashboard 
      first_name={user.user.first_name} 
      username={user.user.username} 
      userid={user.user.id}
      Logout={Logout}/>
    )
  }
  else{
    return(
      <div>
        <h1>No Dashboard</h1>
      </div>
    )
  }

}

export default App;
