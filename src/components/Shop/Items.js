import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ItemContextProvider, useItemContext } from './OpenLink';

import Shark from './items/Shark'
import '../../styling/Shop/items.css'

import SharkPic from '../../assets/pieces/shark.jpeg'
import TrexPic from '../../assets/pieces/trex.png'
import Eiffel from '../../assets/pieces/eiffel-tower.jpeg'
import Dragon from '../../assets/pieces/dragon.jpeg'
import Dino from '../../assets/pieces/dino.jpeg'
import Giraffe from '../../assets/pieces/giraffe-toothbrush-holder.jpeg'
import Astronaut from '../../assets/pieces/astronaut.jpeg'
import Octopus from '../../assets/pieces/octopus.png'
import GlassesHolder from '../../assets/pieces/glasses-holder.png'
import DarthVader from '../../assets/pieces/darth-vader.jpeg'
import Pterodactyl from '../../assets/pieces/pterodactyl.jpeg'
import DinoCellphone from '../../assets/pieces/dino-cellphone.jpeg'
import NameTag from '../../assets/pieces/name-tag.jpeg'
import iPadHolder from '../../assets/pieces/ipad-holder.png'
import Chameleon from '../../assets/pieces/chamaleon.jpeg'
import DeskOrganizer from '../../assets/pieces/desk-organizer.jpeg'
import Owl from '../../assets/pieces/owl.jpeg'
import SkullBowl from '../../assets/pieces/skull-bowl.jpeg'
import Vase from '../../assets/pieces/spiral-vase.jpeg'
import HappyPot from '../../assets/pieces/happy-pot.jpeg'
import TrexSkull from './items/TrexSkull';

const Items = () => {
	const { openLink, setOpenLink } = useItemContext();

	return (
			<div className='items'>
			<h2><strong>Our Shop</strong></h2>
			<Container>
				<Row className='item-row align-items-center justify-content-center'>
					<Col className='item' xs={8} md={8} xl={3}>
						<button onClick={() => {setOpenLink('shark')}} className='item-button'>
							<div className='image-container'>
								<img src={SharkPic} alt="Shark"/>
								<div className='image-overlap'>
									<h3><b>Shark (Articulated)</b></h3>
									<p><i>$6.00</i></p>
								</div>
							</div>
						</button>
						{openLink === 'shark' && <Shark />}
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<button onClick={() => {setOpenLink('trex-skull')}} className='item-button'>
							<div className='image-container'>
								<img src={TrexPic} alt="Trex"/>
								<div className='image-overlap'>
									<h3><b>T-rex Skull (With Pedestal)</b></h3>
									<p><i>$10.00</i></p>
								</div>
							</div>
						</button>
						{openLink === 'trex-skull' && <TrexSkull />}
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Eiffel} alt="Eiffel Tower" />
							<div className='image-overlap'>
								<h3><b>Eiffel Tower</b></h3>
								<p><i>$8.00</i></p>
							</div>
						</div>
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Dragon} alt="Dragon"/>
							<div className='image-overlap'>
								<h3><b>Flexi Dragon (Articulated)</b></h3>
								<p><i>$12.00</i></p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='item-row align-items-center justify-content-center'>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Dino} alt="Dino"/>
							<div className='image-overlap'>
								<h3><b>Dino (Articulated)</b></h3>
								<p><i>$6.00</i></p>
							</div>
						</div>
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Octopus} alt="Octopus"/>
							<div className='image-overlap'>
								<h3><b>Octopus (Articulated)</b></h3>
								<p><i>$6.00</i></p>
							</div>
						</div>
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Giraffe} alt="Giraffe"/>
							<div className='image-overlap'>
								<h3><b>Giraffe Toothbrush Holder</b></h3>
								<p><i>$3.00</i></p>
							</div>
						</div>
					</Col>
					<Col className='item' xs={8} md={8} xl={3}>
						<div className='image-container'>
							<img src={Astronaut} alt="Astronaut" />
							<div className='image-overlap'>
								<h3><b>Astronaut on the Moon</b></h3>
								<p><i>$5.00</i></p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='item-row align-items-center justify-content-center'>
					<Col>
						<div className='image-container'>
							<img src={GlassesHolder} alt="Shark"/>
							<div className='image-overlap'>
								<h3><b>Sir Glasses Holder</b></h3>
								<p><i>$5.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={DarthVader} alt="Darth Vader"/>
							<div className='image-overlap'>
								<h3><b>Mini Darth Vader</b></h3>
								<p><i>$5.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={Pterodactyl} alt="Pterodactyl" />
							<div className='image-overlap'>
								<h3><b>Flexy Pterodactyl</b></h3>
								<p><i>$6.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={DinoCellphone} alt="Dragon"/>
							<div className='image-overlap'>
								<h3><b>Dino Cellphone Stand</b></h3>
								<p><i>$3.00</i></p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='item-row align-items-center justify-content-center'>
					<Col>
						<div className='image-container'>
							<img src={NameTag} alt="Customizable Name Tag"/>
							<div className='image-overlap'>
								<h3><b>Customizable Name Tag</b></h3>
								<p><i>$3.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={iPadHolder} alt="iPad Holder"/>
							<div className='image-overlap'>
								<h3><b>Headrest iPad Holder</b></h3>
								<p><i>$3.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={Chameleon} alt="Chameleon" />
							<div className='image-overlap'>
								<h3><b>Chameleon Pen Holder</b></h3>
								<p><i>$3.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={DeskOrganizer} alt="Desk Organizer"/>
							<div className='image-overlap'>
								<h3><b>Multi-Purpose Desk Organizer</b></h3>
								<p><i>$7.00</i></p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='item-row align-items-center justify-content-center'>
					<Col>
						<div className='image-container'>
							<img src={Owl} alt="Owl"/>
							<div className='image-overlap'>
								<h3><b>Owl on a Log</b></h3>
								<p><i>$4.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={SkullBowl} alt="Skull Candy Bowl"/>
							<div className='image-overlap'>
								<h3><b>Skull Candy Bowl</b></h3>
								<p><i>$8.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={Vase} alt="Spiral Vase" />
							<div className='image-overlap'>
								<h3><b>Spiral Vase</b></h3>
								<p><i>$4.00</i></p>
							</div>
						</div>
					</Col>
					<Col>
						<div className='image-container'>
							<img src={HappyPot} alt="Happy Pot"/>
							<div className='image-overlap'>
								<h3><b>Happy Sitting Pot</b></h3>
								<p><i>$5.00</i></p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

const ItemsWithProvider = () => (
	<ItemContextProvider>
	  <Items />
	</ItemContextProvider>
  );
  
  export default ItemsWithProvider;