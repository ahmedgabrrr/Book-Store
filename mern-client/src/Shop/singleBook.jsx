import React from 'react'
import FavoriteBooks from "../Home/FavoriteBooks"
import { Link, useLoaderData } from 'react-router-dom'
import { FaCartShopping, FaPen } from "react-icons/fa6"

const singleBook = () => {
	const { _id, bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData()
	return (
		<div>
			<div className='mt-28 px-4 lg:px-24 flex items-center'>


				<div className='flex w-full flex-col md:flex-row justify-between gap-12 '>
					{/*left side*/}
					<div className='space-y-8 md:w-1/2 h-full'>
						<img className='max-w-full' src={imageURL} alt="" />
						<span className='font-bold  my-3.5'>

							{category}
						</span>
						<Link className='text-4xl' to={bookPDFURL}>
							<div className='  bg-blue-600 hover:bg-black p-2 my-5 rounded'>
								<FaCartShopping className='w-4 h-4 text-white' />
							</div>
						</Link>
					</div>
					{/*right side*/}
					<div>
						<h1 className='font-bold text-5xl text-center '>{bookTitle}</h1>
						<p className='text-center font-bold text-blue-700 py-3'>
							<span>
								<FaPen className='inline-block ' />
							</span>
							{authorName}</p>

						<p className=' font-normal p-4'>{bookDescription}</p>

					</div>
				</div>
			</div>
			<div>
				<FavoriteBooks />
			</div>
		</div>
	)
}

export default singleBook