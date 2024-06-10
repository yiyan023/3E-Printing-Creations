import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Items from './Shop/Items'
import '../styling/shop.css'

const Shop = () => {
  return (
	<div className='shop'>
		<NavBar />
		<Items />
		<Footer />
	</div>
  )
}

export default Shop