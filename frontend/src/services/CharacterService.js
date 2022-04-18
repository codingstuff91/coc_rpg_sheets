import axios from 'axios'
import { DB_URL } from "../config.js";

const apiClient = axios.create({  
  baseURL: DB_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
    getCharacters() {
      return apiClient.get('/character')
    }
  }