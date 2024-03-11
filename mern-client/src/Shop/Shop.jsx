import React, { useEffect, useState } from 'react'
import { Card, Avatar } from 'flowbite-react';
import avatarImage from "../assets/banner-images/avatar.jpg"
import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"
const Shop = () => {
	const [books, setBooks] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data))
	}, [])
	return (
		<div className='mt-28 px-4 lg:px-24'>
			<h2 className='text-5xl font-bold text-center my-10 center'>All Books Are Here</h2>
			<div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8'>
				{
					books.map(book => <Link to={`/get-book/${book._id}`} key={book._id}>
						<Card

							className="max-w-sm my-8 h-full "
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc={book.imageURL}
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{book.bookTitle}
							</h5>
							<div className="font-bold text-start text-gray-700 dark:text-gray-400">
								<Avatar className='inline-block ' img={avatarImage} rounded bordered />
								{book.authorName}
							</div>
							<button className='bg-blue-700 font-semibold text-white py-2 rounded'>
								<FaCartShopping className='inline-block mx-1' />
								Buy Now</button>
						</Card>
					</Link>)
				}
			</div>
		</div>
	)
}

export default Shop