import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorQuotes } from "../api/api";
import laurelWreathIcon from "../assets/laurel-wreath.png"

// Author Quotes function
const AuthorQuotes = () => {
    const { authorName } = useParams<{ authorName: string }>()
    const [quotes, setQuotes] = useState<string[]>([])

    useEffect(() => {
        if (authorName) {
            fetchAuthorQuotes(authorName)
        }
    }, [authorName])

    const fetchAuthorQuotes = async (authorName: string) => {
        try {
            const response = await getAuthorQuotes(authorName)
            console.log('API Resopnse:', response)
            setQuotes(response.quotes || [])
            console.log('Quotes:', response.quotes)
        } catch (error) {
            console.error('Error fetching author quotes:', error) 
        }
    }

    console.log("Author Name:", authorName);
    console.log("Quotes:", quotes);

    return (
        <div className="author-quote-container">
            <h2>Quotes by {authorName}</h2>
            <ul>
                {quotes.map((quote, index) => (
                <li key={index}>
                    <img src={laurelWreathIcon} alt="Icon" className="quote-icon" />
                    {quote}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AuthorQuotes