import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar, FaQuoteLeft } from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import ProPic from "../assets/banner-images/me.jpg"
const Review = () => {
	return (
		<div className='my-12 px-4 lg:px-24'>
			<h2 className='text-5xl text-center font-bold text-black my-5'>Our Customers</h2>
			<div>
				<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
					<SwiperSlide >
						<div>
							<FaQuoteLeft className='text-blue-700' />
							<div className='text-amber-500 flex gap-2'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<div className='mb-5 font-bold'>
								I love books! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.
								<div className="flex flex-col flex-wrap gap-2 ">

									<h5 className='text-lg font-medium '>Ahmed Gabr</h5>
									<p className='text-base'>Software Engineer</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<FaQuoteLeft className='text-blue-700' />
							<div className='text-amber-500 flex gap-2'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<div className='mb-5 font-bold'>
								I love books! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.
								<div className="flex flex-col flex-wrap gap-2 ">

									<h5 className='text-lg font-medium '>Ahmed Gabr</h5>
									<p className='text-base'>Software Engineer</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<FaQuoteLeft className='text-blue-700' />
							<div className='text-amber-500 flex gap-2'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<div className='mb-5 font-bold'>
								I love books! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.
								<div className="flex flex-col flex-wrap gap-2 ">

									<h5 className='text-lg font-medium '>Ahmed Gabr</h5>
									<p className='text-base'>Software Engineer</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Review