import React, { useState, useEffect } from 'react'
import BooksCard from '../components/BooksCard';


const FavoriteBooks = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, data.length / 2)))
	}, [])
	return (
		<BooksCard books={books} headline="Best Seller Books" />
	)
}

export default FavoriteBooks