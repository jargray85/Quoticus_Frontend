import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryQuotes } from '../api/api';

interface Author {
    id: number;
    name: string;
    date: string;
    quote: string;
    source: string;
}

interface CategoryQuotesResponse {
    authors: Author[];
    category_name: string;
    status: number;
}

const CategoryQuotes = () => {
    const { categoryName } = useParams();
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        if (categoryName) {
            fetchCategoryQuotes();
        }
    }, [categoryName]);

    const fetchCategoryQuotes = async () => {
        try {
            console.log('Fetching category quotes...');

            const response = await getCategoryQuotes(categoryName!);
            console.log('API Response:', response);

            if (response && response.status === 200 && response.data && response.data.authors) {
                setAuthors(response.data.authors);
            } else {
                setAuthors([]);
            }
        } catch (error) {
            console.error('Error fetching category quotes:', error);
        }
    };

    console.log('Authors:', authors);

    return (
        <div>
            <h1>Quotes about {categoryName}</h1>

            {authors.length > 0 ? (
                <ul>
                    {authors.map((author) => (
                        <li key={author.id}>
                            <h2>{author.name}</h2>
                            <p>Date: {author.date}</p>
                            <p>Quote: {author.quote}</p>
                            <p>Source: {author.source}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No authors found for the category.</p>
            )}
        </div>
    );
};

export default CategoryQuotes;