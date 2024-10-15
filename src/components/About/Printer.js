import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styling/About/printer.css'

import Geetech from '../../assets/other/geetech.png'
import Monoprice from '../../assets/other/monoprice.png'
import Bambulab from '../../assets/other/bambu_lab.png'

const Printer = () => {
  return (
	<div className='printer'>
		<h2><strong>Our Printers</strong></h2>
		<Container className='d-flex flex-column align-items-center justify-content-center'>
			{/* <Row className='printer-section-one align-items-center justify-content-center'>
				<Col xl={4} md={8} xs={8} className='printer-image'> 
					<img src={Geetech} alt="Geetech A10M"/>
				</Col>
				<Col xl={5} md={8} xs={8} className='printer-description'>
					<h3>Geetech A10M</h3>
					<hr></hr>
					<p>The Geetech A10M printer is a printer capable of dual printing (printing with different colours). When receiving the packaged 3D printer, it’s assemply method is user-friendly making it ready to print once assembled. It also provides you with an 8GB SD card in which you can store your 3D prints and the code. </p>
				</Col>
			</Row>
			<Row className='printer-section-two align-items-center justify-content-center'>
				<Col xl={4} md={8} xs={8} className='printer-image'>
					<img src={Monoprice} alt="Monoprice Voxel"/>
				</Col>
				<Col xl={5} md={8} xs={8} className='printer-description'>
					<h3 className>Monoprice Voxel</h3>
					<hr></hr>
					<p>The Monoprice Voxel has multiple features and is great for beginners. It is fully enclosed with glass panels, printing with minimal noise. It has a wireless printing option and produces high quality prints. When receiving the package, it is already assembled for you and is ready to print once package opened. </p>
				</Col>
			</Row> */}
			<Row className='printer-section-two align-items-center justify-content-center'>
				<Col xl={4} md={8} xs={8} className='printer-image'>
					<img src={Bambulab} alt="Bambu Lab"/>
				</Col>
				<Col xl={5} md={8} xs={8} className='printer-description'>
					<h3 className>BambuLab X1 Carbon with AMS</h3>
					<hr></hr>
					<p>The BambuLab X1 Carbon with AMS is a powerful 3D printer designed for professionals and enthusiasts. With the AMS (Automatic Material System), you can easily switch between multiple filament types and colors. The X1 Carbon offers wireless printing, and its fast printing speeds don’t compromise on quality. This printer excels in delivering high-quality, detailed prints. </p>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Printer