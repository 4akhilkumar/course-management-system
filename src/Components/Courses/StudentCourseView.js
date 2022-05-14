import React from 'react'
import CourseService from '../../Services/CourseService'
import { useState,useEffect } from 'react'

const CourseView=(props)=>{
    const [courseTasks,setCourseTasks]=useState([])
    const [errorMessage,setErrorMessage]=useState(null)
    const [submissiondetail,setSubmissionDetail]=useState(null)
    let selectedFile=null
    useEffect(() => {

        CourseService.getTasksOfCourse(props.course.id).then(response => {
            setCourseTasks(response)
          })
        
      }, [props])
      console.log(courseTasks);


         const onFileChange = event => {
             event.preventDefault()
        selectedFile=event.target.files[0]
      }


      const RenderTasks= ({task})=>{
          
        const onFileUpload = e => {
            e.preventDefault()
            if(selectedFile===null){
                setErrorMessage('Please Choose the File to Upload!')
                setTimeout(() => {
                    setErrorMessage(null)
                    }, 5000)
            }
            else{
            const formData = new FormData();
            formData.append('task',task.id)
            formData.append('file',selectedFile)
            formData.append('user_student',props.userid)
            const response=CourseService.uploadFile(formData)
            response.then(response=>{
                setErrorMessage(response.message)
                setTimeout(() => {
                    setErrorMessage(null)
                    }, 5000)
            })
           
        }
        const showAssignment=()=>{

        }
            
          }
          return(
              <div>
                {/* <div className="staff-profile-card">
                    <div className="staff-profile-img">
                    </div>
                    <div className="staff-profile-infos">
                      <div className="staff-profile-name">
                        <h2>{task.name}</h2>
                        <h4></h4>
                      </div>
                      <p className="staff-profile-text">
                      {task.description}
                      </p>
                      
                      <div className="staff-profile-links">
                        <button className="staff-profile-view" onClick={showAssignment}>
                          View Assignment
                        </button>
                      </div>
                    </div>
                </div> */}
            <div className="course-tasks">
                <div className='each-course-task'>
                    <details>
                    <summary  className='each-course-task' >{task.name}</summary>
                    <p>{task.description}</p>
                        <div>
                        <input type="file" onChange={onFileChange} />
                        <button onClick={onFileUpload}>
                        Upload File
                        </button>
                    </div>
                    </details>
                </div>
            </div>
              </div>
        )
      }

    return (
        
        <div>
            <section>
                <h3 class="section-head">{props.course.name}</h3>
                <h3>{props.course.description}</h3>
            </section>
            <h3><mark>Assignments</mark></h3>
            {(courseTasks.length===0) ? (
             <p>No Assignments Available</p>
          ) : (

            courseTasks.map((task,i)=><RenderTasks task={task}/>)
          )}
            <br/>
            <button className="staff-profile-view" onClick={props.resetDefaults}>
                Back to Dashboard
            </button>

            <h3 color='red'>{errorMessage}</h3>

        </div>
    )
}
export default CourseView