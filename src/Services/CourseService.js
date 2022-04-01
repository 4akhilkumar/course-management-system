import Courses from './Courses'
const CourseService=async(id)=>{
    const response=await Courses.getAll(id)
    // console.log(response)
    return response
}
export default CourseService