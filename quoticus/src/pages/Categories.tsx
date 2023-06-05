import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { getCategories } from "../api/api";

// Categories function
const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await getCategories()
            setCategories(response.data)
        } catch (error) {
            console.error("Error fetching categories:", error)
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category: any) => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.category_name}`}>{category.category_name}</Link>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default Categories
