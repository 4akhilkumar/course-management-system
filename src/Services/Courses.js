import axios from 'axios'
const baseUrl = ''

const getAllStudentRegCourses = (stuid) => {

    const request = axios.get(`http://127.0.0.1:8000/api/get_student_registered_courses/${stuid}/`)
    return request.then(response => response.data)
  }
  const getAllFacultyRegCourses = (facultyid) => {

    const request = axios.get(`http://127.0.0.1:8000/api/get_faculty_registered_courses/${facultyid}/`)
    return request.then(response => response.data)
  }
  const getTaskSubmissions=(cid)=>{
    const response = axios.get(`http://127.0.0.1:8000/api/getSubmittedTasksbyCourse/${cid}/`)
    return response.then(response=>response.data)
  }
  const getTasksOfCourse=(courseid)=>{
    const request = axios.get(`http://127.0.0.1:8000/api/getTasksbyCourse/${courseid}/`)
    return request.then(response => response.data)
  }
  const uploadFile=async(object)=>{
    const request= await axios.post(`http://127.0.0.1:8000/api/course_task_submission/`,object)
    return request.data
  }

  const create = async newObject => {  
    const response = await axios.post(baseUrl, newObject)
    return response.data
  }
  const getSubmissionOfStudent=async(studentid,taskid)=>{
    const response=await axios.get(`http://127.0.0.1:8000/api/getSubmissionsbyTaskID/${taskid}/${studentid}/ `)
    return response
  }
  const gradeSubmission=async(object)=>{
    const response = await axios.post(`http://127.0.0.1:8000/api/evaluate_submission/`, object)
    return response.data
  }

const funs={getAllStudentRegCourses ,getTasksOfCourse,uploadFile, create,getAllFacultyRegCourses,getTaskSubmissions,getSubmissionOfStudent,gradeSubmission}
  export default funs