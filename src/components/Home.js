import React from 'react'
import NavBar from './NavBar'
import Banner from './Home/Banner'
import Favourite from './Home/Favourite'
import Footer from './Footer'
import '../styling/home.css'

const Home = () => {
  return (
	<div div="home">
		<NavBar />
		<Banner />
		<Favourite />
		<Footer />
	</div>
  )
}

export default Home