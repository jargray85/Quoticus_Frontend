import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true
})

// URL
const AUTH_URL = "http://localhost:8000/api/v1/users"

// User registration
export const registerUser = async (email: string, password: string) => {
    try {
        // Send preflight OPTIONS request
        await axiosInstance.options(AUTH_URL)
        
        // Send the actual POST request
        const response = await axiosInstance.post(AUTH_URL, {
            email,
            password
        })
        return response.data;
    } catch (error) {
        throw error
    }
}


// User Login
export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post(`${AUTH_URL}/login`, {
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
        const response = await axiosInstance.post(`${AUTH_URL}/logout`)
        return response.data
    } catch (error) {
        throw error
    }
}