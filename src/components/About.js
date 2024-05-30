import React from 'react'
import Team from './About/Team'
import Printer from './About/Printer'
import NavBar from './NavBar'
import Footer from './Footer'

const About = () => {
  return (
	<div class="about">
		<NavBar />
		<Team />
		<Printer />
		<Footer />
	</div>
  )
}

export default About