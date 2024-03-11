import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from "react-icons/fa6"
const BooksCard = ({ books, headline }) => {
	console.log(books)

	return (

		<div className='my-16 px-4 lg:px-24'>
			<h2 className='text-5xl text-center  font-bold text-black my-5'>{headline}</h2>
			<div>
				<Swiper
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper w-full h-full"
				>

					{
						books.map(book => <SwiperSlide key={book._id}>
							<Link to={`/get-book/${book._id}`}>
								<div className=' md:h-80 relative'>
									<img className=' h-full' src={book.imageURL} alt="" />
									<div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
										<FaCartShopping className='w-4 h-4 text-white' />
									</div>
								</div>
								<div>
									<div>
										<h3 className=' font-bold'>{book.bookTitle}</h3>
										<p>{book.authorName}</p>
									</div>
									<div>
										<p>10.00$</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>)
					}
				</Swiper>

			</div>
		</div>

	)
}

export default BooksCard