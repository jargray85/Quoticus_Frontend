import axios from "axios";

// define URL to backend
const URL = "https://quoticus.herokuapp.com/api/v1"

// fetch authors
export const getAuthors = async () => {

    try {
        const response = await axios.get(`${URL}/authors`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching authors:', error)
        throw error
    }
}

// fetch quotes by author
export const getAuthorQuotes = async (authorName: string) => {
    try {
        const response = await axios.get(`${URL}/authors/${authorName}/quotes`)
        return response.data
    } catch (error) {
        console.error('Error fetching quotes by auther:', error)
        throw error
    }
}

// fetch categories
export const getCategories = async () => {
    try {
        const response = await axios.get(`${URL}/categories`)
        return response.data
    } catch (error) {
        throw error
    }
}

// fetch quotes by category
export const getCategoryQuotes = async (categoryName: string) => {
    try {
        const response = await axios.get(`${URL}/categories/${categoryName}/quotes`)
        return response.data
    } catch (error) {
        console.error('Error fetching quotes by category:', error)
        throw error
    }
}