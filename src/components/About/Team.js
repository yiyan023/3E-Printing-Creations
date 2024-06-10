import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import '../../styling/About/team.css'

import Eddy from '../../assets/other/eddy-wang.png'
import Yiyan from '../../assets/other/yiyan-huang.png'

const Team = () => {
  return (
	<div className='team'>
		<h2><strong>Meet the Team</strong></h2>
		<Container>
			<Row className="person justify-content-center align-items-center">
				<Col xl={5} md={8} xs={8} >
					<img src={Eddy} alt="Edward Wang"/>
					<h3>Edward Wang</h3>
					<h4>Founder & Director</h4>
				</Col>
				<Col xl={5} md={8} xs={8}>
					<img src ={Yiyan} alt="Yiyan Huang"/>
					<h3>Yiyan Huang</h3>
					<h4>Developer & Graphic Designer</h4>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Team