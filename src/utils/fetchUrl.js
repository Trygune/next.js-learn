import axios from 'axios'

// تعریف آدرس پایه برای اینکه هی تکرارش نکنیم
// for local development
// const BASE_URL = 'http://localhost:8000'

const fetchData = async (endpoint) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
  if (typeof window === 'undefined' && !baseUrl) {
    baseUrl = 'http://localhost:3000'
  }
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  const url = `${baseUrl}/${cleanEndpoint}`
  console.log('Fetching from:', url)

  // for dev
  // const response = await axios.get(`${BASE_URL}/${endpoint}`)
  // return response.data

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message)
    // برای جلوگیری از کرش کردن کل برنامه، آرایه خالی یا نال برمی‌گردانیم
    return []
  }
}

// for development purpose
// const postData = async (endpoint, data) => {
//   const response = await axios.post(`${BASE_URL}/${endpoint}`, data)
//   return response.data
// }

// for development purpose
// export { fetchData, postData }
export { fetchData }
