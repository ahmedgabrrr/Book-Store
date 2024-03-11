import React, { useState, useEffect } from 'react'
import BooksCard from '../components/BooksCard';


const FavoriteBooks = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(6, 12)))
	}, [])
	return (
		<BooksCard books={books} headline="Other Books" />
	)
}

export default FavoriteBooks