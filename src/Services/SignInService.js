import StudentService from './Students'
const SignInService=async (object)=>{
   const response= await StudentService.login(object)
   return response
}
export default SignInService