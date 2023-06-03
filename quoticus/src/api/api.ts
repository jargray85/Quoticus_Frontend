import axios from "axios";

// define database URL
const API_URL = process.env.DATABASE_URL || ''

// fetch quotes
export const getAuthors = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/authors`)
        return response.data
    } catch (error) {
        console.error('Error fetching quotes:', error)
        throw error
    }
}