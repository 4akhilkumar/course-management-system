import axios from 'axios'
const baseUrl = ''

const getAll = (id) => {

    const request = axios.get(`http://127.0.0.1:8000/api/get_student_registered_courses/${id}/`)
    return request.then(response => response.data)
  }

  const create = async newObject => {  
    const response = await axios.post(baseUrl, newObject)
    return response.data
  }

const funs={getAll , create}
  export default funs