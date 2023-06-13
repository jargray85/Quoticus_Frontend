import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { getAuthors } from '../api/api'

// Authors function
const Authors = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetchAuthors()
    }, [])

    const fetchAuthors = async () => {
        try {
            const response = await getAuthors()
            console.log('API Response:', response)
            setAuthors(response.data)
        } catch (error) {
            console.error('Error fetching quotes:', error)
            
        }
    }

    return (
        <div>
            <h2>Quotes by Author</h2>
            <ul>
                {authors.map((author: any) => (
                    <li key={author.id}>
                        <Link to={`/authors/${author.name}/quotes`}>{author.name}</Link>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Authors