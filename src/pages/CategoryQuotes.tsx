import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryQuotes } from '../api/api'

interface Quote {
    id: number
    date: string
    name: string
    quote: string
    source: string
}

const CategoryQuotes = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [quotes, setQuotes] = useState<Quote[]>([])

    useEffect(() => {
        if (categoryName) {
            fetchCategoryQuotes(categoryName)
        }
    }, [categoryName])

    const fetchCategoryQuotes = async (categoryName: string) => {
        try {
            const response = await getCategoryQuotes(categoryName)
            console.log('API Response:', response)
            setQuotes(response.authors || [])
            console.log('Quotes:', response.authors)
          } catch (error) {
            console.error('Error fetching category quotes:', error)
            setQuotes([])
          }
    };

    console.log('Category Name:', categoryName)
    console.log('Quotes:', quotes)

    return (
        <div>
            <h1>Quotes about {categoryName}</h1>

            {quotes.length > 0 ? (
                <ul>
                    {quotes.map((quote) => (
                        <li key={quote.id}>
                            <h2>{quote.name}</h2>
                            <p>Date: {quote.date}</p>
                            <p>Quote: {quote.quote}</p>
                            <p>Source: {quote.source}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No quotes found for this category.</p>
            )}
        </div>
    )
}

export default CategoryQuotes