import axios from 'axios'
const baseUrl = ''

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

  const create = async newObject => {  
    const response = await axios.post(baseUrl, newObject)
    return response.data
  }
  const login=async newObject=>{
      const response=await axios.post('http://127.0.0.1:8000/api/login/',newObject)
      // console.log(response.data)
      return response.data
  }
const funs={getAll , create, login}
  export default funs