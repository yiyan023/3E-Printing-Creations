import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styling/About/printer.css'

import Geetech from '../../assets/other/geetech.png'
import Monoprice from '../../assets/other/monoprice.png'

const Printer = () => {
  return (
	<div className='printer'>
		<h2><strong>Our Printers</strong></h2>
		<Container className='d-flex flex-column align-items-center justify-content-center'>
			<Row className='printer-section-one align-items-center justify-content-center'>
				<Col xl={4}>
					<img src={Geetech} alt="Geetech A10M"/>
				</Col>
				<Col xl={5}>
					<h3>Geetech A10M</h3>
					<hr></hr>
					<p>The Geetech A10M printer is a printer capable of dual printing (printing with different colours). When receiving the packaged 3D printer, it’s assemply method is user-friendly making it ready to print once assembled. It also provides you with an 8GB SD card in which you can store your 3D prints and the code. </p>
				</Col>
			</Row>
			<Row className='printer-section-two align-items-center justify-content-center'>
				<Col xl={5}>
					<h3>Monoprice Voxel</h3>
					<hr></hr>
					<p>The Monoprice Voxel has multiple features and is great for beginners. It is fully enclosed with glass panels, printing with minimal noise. It has a wireless printing option and produces high quality prints. When receiving the package, it is already assembled for you and is ready to print once package opened. </p>
				</Col>
				<Col xl={4}>
					<img src={Monoprice} alt="Monoprice Voxel"/>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Printer