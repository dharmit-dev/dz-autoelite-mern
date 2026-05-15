import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api',
  timeout: 8000,
})

export const getCars = async (params = {}) => {
  const { data } = await api.get('/cars', { params })
  return data.data
}

export const getCarById = async (id) => {
  const { data } = await api.get(`/cars/${id}`)
  return data
}

export const submitContact = async (payload) => {
  const { data } = await api.post('/contact', payload)
  return data
}
