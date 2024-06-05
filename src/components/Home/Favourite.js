import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styling/Home/favourites.css'

import GlassesHolder from '../../assets/pieces/glasses-holder.png'
import Octopus from '../../assets/pieces/octopus.png'
import Trex from '../../assets/pieces/trex.png'

const Favourite = () => {
  return (
	<div className='favourites'>
		<h2><b>Fan favourites</b></h2>
		<p className='intro-line'>Specifically chosen to fit our customers' needs. Built from our finest 3D printer machines.</p>

		<Container >
			<Row className='align-items-center justify-content-center'>
				<Col xl={3} md= {6} xs={8} className='m-2'>
					<img src={GlassesHolder} />
					<h3><b>Sir Glasses Holder</b></h3>
					<p>$5.00</p>
				</Col>
				<Col xl={3} md= {6} xs={8} className='m-2'>
					<img src={Octopus} />
					<h3><b>Octopus</b></h3>
					<p>$6.00</p>
				</Col>
				<Col xl={3} md= {6} xs={8} className='m-2'>
					<img src={Trex} />
					<h3><b>T-Rex</b></h3>
					<p>$10.00</p>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Favourite