import React, { useEffect, useState} from "react";
import { getAuthors } from '../api/api'


const Quotes = () => {
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
            <h1>Quotes</h1>
            <ul>
                {authors.map((author: any) => (
                    <li key={author.id}>
                        <strong>{author.name}</strong>
                        <ul>
                            {author.quotes.map((quote: any) => (
                                <li key={quote.id}>{quote.text}</li>
                            ))}
                        </ul>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Quotes