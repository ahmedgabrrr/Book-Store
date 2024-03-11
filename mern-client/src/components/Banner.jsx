import React from 'react'
import BannerCard from '../components/bannerCard/BannerCard'

const Banner = () => {
	return (
		<div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
			<div className='flex w-full flex-col md:flex-row justify-between gap-12 py-40'>
				{/*left side*/}
				<div className='space-y-8 md:w-1/2 h-full'>
					<div>
						<h2 className='text-5xl font-bold leading-snug'>Buy And Sell Books
							<span className='text-blue-700'> for the best prices</span></h2>
						<p className='md:w-4/54'>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
						<input type="search" name='search' id='search' placeholder='search a book' className='py-2 px-2 my-7 rounded-s-sm outline-none' />
						<button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
					</div>
				</div>
				{/*right side*/}
				<div>
					<BannerCard />
				</div>
			</div>
		</div>
	)
}

export default Banner