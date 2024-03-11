import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook from "./favBook"
import PromoBanner from './PromoBanner'
import OtherBooks from "./OtherBooks"
import Review from './Review'

const Home = () => {
	return (
		<div >
			<Banner />
			<FavoriteBooks />
			<FavBook />
			<PromoBanner />
			<OtherBooks />
			<Review />

		</div>
	)
}

export default Home