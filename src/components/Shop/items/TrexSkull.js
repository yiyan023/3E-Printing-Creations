import {React } from 'react'
import { useItemContext } from '../OpenLink';
import { Col, Container, Row } from 'react-bootstrap'
import TrexPic from '../../../assets/pieces/trex.png'
import { X } from 'react-bootstrap-icons'
import '../../../styling/Shop/item-pop-up.css'

const TrexSkull = () => {
	const { setOpenLink } = useItemContext();

	return (
		<div className='pop-up'>
			<div className='item-pop-up'>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Col xl={6} md={6} xs={7}>
						<img src={TrexPic} alt="Shark"/>
					</Col>
					<Col xl={6} md={6} xs={7}>
							<button className='x-button'>
								<X size={25} onClick={()=>{setOpenLink('')}}/>
							</button>
						<h3><b>T-rex Skull (With Pedestal)</b></h3>
						<p><i>$10.00</i></p>	
						<Container>
							<Row className='align-items-center justify-content-center'>
								<Col xl={5} md={10} xs={12} className='item-form'>
										<select>
											<option hidden>Select Colour</option>
											<option>Black</option>
											<option>White</option>
											<option>Blue</option>
											<option>Green</option>
											<option>Red</option>
											<option>Orange</option>
											<option>Purple</option>
											<option>Yellow</option>
											<option>Gold</option>
										</select>
								</Col>
								<Col xl={5} md={10} xs={12} className='item-form'>
									<input type="number" min={0} placeholder='Quantity'/>	
								</Col>
							</Row>
						</Container>
						<div className='cart-button-container'>
							<button class="cart-button">
								Add to Cart
							</button>	
						</div>							
					</Col>
				</Row>
			</Container>
		</div>
		</div>
	)
}

export default TrexSkull