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
    }
  }, [])

  const handleLogin = async(event) => {
    event.preventDefault()
    try {
      const user = await SignInService({
        username, password,
      })
      console.log(user)
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
    </div>
  )
  }
  else{
    return(

      <StudentDashboard username={username} Logout={Logout}/>
    )
  }

}

export default App;
