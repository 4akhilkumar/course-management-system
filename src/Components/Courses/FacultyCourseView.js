import React from 'react'
import CourseService from '../../Services/CourseService'
import { useState,useEffect } from 'react'

const CourseView=(props)=>{
    const [taskSubmissions,setTaskSubmissions]=useState([])
    const [errorMessage,setErrorMessage]=useState(null)
    let score=0
    let feedback=""

   
    useEffect(() => {

        CourseService.getTaskSubmissionsOfCourse(props.course.id).then(response => {
            setTaskSubmissions(response)
          })
        
      }, [props])
      console.log(taskSubmissions)

      const RenderSubmissions=({submission})=>{
        //   console.log(submission)
        const handleGrade=(e)=>{
            e.preventDefault()
            const formData = new FormData();
            formData.append('task_submission_id',submission.id)
            formData.append('user_faculty',props.username)
            formData.append('score',score)
            formData.append('feedback',feedback)
            const res=CourseService.gradeSubmission(formData)
            res.then(response=>{
                if(response.user_faculty!==null){
                    setErrorMessage("Submission Graded Successfully")
                    CourseService.getTaskSubmissionsOfCourse(props.course.id).then(response => {
                        setTaskSubmissions(response)
                      })
                    setTimeout(() => {
                        setErrorMessage(null)
                        
                        }, 5000)}
                        else{
                            setErrorMessage(response.message)
                    setTimeout(() => {
                        setErrorMessage(null)
                        }, 5000)
                        }
        })
        }
            let fileLink=`http://127.0.0.1:8000${submission.file}`
        
          return(
            <div className="course-tasks">
            <div className='each-course-task'>
                <details>
                <summary>{submission.task} by {submission.user_student}</summary>
                <h3>Submitted by:</h3> {submission.user_student}
                <h3>Submission File:</h3><a href={fileLink}>View Submission</a><br />
                {(submission.user_faculty!==null)?(<h1>Submission Graded</h1>):
                (
                    <div>
                   <h3>Marks: <input type="number" name="score" onChange={({target})=>{score=target.value}} /> / 100 </h3>
                    <h3>FeedBack:<input type="text" name="feedback" onChange={({target})=>{feedback=target.value}} /> </h3>
                    <button onClick={handleGrade}>Grade</button>
                    </div>
                )}
                </details>
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
            <h3><mark>Submissions</mark></h3>
            {(taskSubmissions.length===0) ? (
             <p>No Submissions Available</p>
          ) : (
            taskSubmissions.map((submission,i)=><RenderSubmissions submission={submission}/>)
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