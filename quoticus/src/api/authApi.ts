import axios from "axios"

// URL
const AUTH_URL = "http://localhost:8000/api/v1"

// User registration
export const registerUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${AUTH_URL}/registration`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        throw error
    }
}


// User Login
export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${AUTH_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
}

// User logout
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${AUTH_URL}/logout`)
        return response.data
    } catch (error) {
        throw error
    }
}