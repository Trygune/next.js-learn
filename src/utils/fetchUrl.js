import axios from 'axios'

// تعریف آدرس پایه برای اینکه هی تکرارش نکنیم
const BASE_URL = 'http://localhost:8000'

const fetchData = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}/${endpoint}`)
  return response.data
}

const postData = async (endpoint, data) => {
  const response = await axios.post(`${BASE_URL}/${endpoint}`, data)
  return response.data
}

export { fetchData, postData }
