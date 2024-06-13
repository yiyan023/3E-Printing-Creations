import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Items from './Shop/Items'
import '../styling/shop.css'
import Customization from './Shop/Customization'

const Shop = () => {
  return (
	<div className='shop'>
		<NavBar />
		<Items />
		<Customization />
		<Footer />
	</div>
  )
}

export default Shop