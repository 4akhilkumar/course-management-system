import Courses from './Courses'
const getAllStudentCourses=async(userid)=>{
    const response=await Courses.getAllStudentRegCourses(userid)
    // console.log(response)
    return response
}
const getAllFacultyCourses=async(userid)=>{
  const response=await Courses.getAllFacultyRegCourses(userid)
  return response
}
const getTaskSubmissionsOfCourse=async (cid)=>{
  const response = await Courses.getTaskSubmissions(cid)
  console.log(response)
  return response
}
const getTasksOfCourse = async(courseid) => {
    const response=await Courses.getTasksOfCourse(courseid)
    return response
  }
  const gradeSubmission=async (object)=>{
       const res= Courses.gradeSubmission(object)
       return res

  }
  const getSubmissionOfStudent=async(studentid,taskid)=>{
    const response=await Courses.getSubmissionOfStudent(taskid,studentid)
    return response
  }

  const uploadFile=async (object)=>{
    const res=await Courses.uploadFile(object)
    return res
  }
  const funs={getAllStudentCourses ,getAllFacultyCourses, getTasksOfCourse,uploadFile,getTaskSubmissionsOfCourse,getSubmissionOfStudent,gradeSubmission}
  export default funs
