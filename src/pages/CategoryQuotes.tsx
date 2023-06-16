import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryQuotes } from '../api/api'
import quoteIcon from '../assets/laurel-wreath.png'

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
        <div className='category-quotes-container'>
            <h2>Quotes about {categoryName}</h2>

            {quotes.length > 0 ? (
                <ul>
                    {quotes.map((quote) => (
                        <li key={quote.id}>
                            <h3>{quote.name}</h3>
                            <p className='quote'>{quote.quote}</p>
                            <p className='date'>Date: {quote.date}</p>
                            <p className='source'>Source: {quote.source}</p>
                            <img src={quoteIcon} alt="quote icon" className="quote-icon" />
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