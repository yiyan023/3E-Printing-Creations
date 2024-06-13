import React from 'react'
import '../../styling/Shop/customization.css'

import White from '../../assets/colors/white.png'
import Blue from '../../assets/colors/blue.png'
import Green from '../../assets/colors/green.png'
import Red from '../../assets/colors/red.png'
import Orange from '../../assets/colors/orange.png'
import Purple from '../../assets/colors/purple.png'
import Black from '../../assets/colors/black.png'
import Yellow from '../../assets/colors/yellow.png'
import Gold from '../../assets/colors/gold.png'

const Customization = () => {

	return (
		<div className='customization'>
			<h2><b>Customizations</b></h2>
			<div className='color-row'>
				<div className='color'>
					<img src={White} alt='white'/>
					<div className='image-overlap'>
						<h3 className='warm'>White</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Black} alt='black'/>
					<div className='image-overlap'>
						<h3 className='cold'>Black</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Blue} alt='blue'/>
					<div className='image-overlap'>
						<h3 className='warm'>Blue</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Green} alt='green'/>
					<div className='image-overlap'>
						<h3 className='warm'>Green</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Red} alt='red'/>
					<div className='image-overlap'>
						<h3 className='cold'>Red</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Orange} alt='orange'/>
					<div className='image-overlap'>
						<h3 className='warm'>Orange</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Purple} alt='purple'/>
					<div className='image-overlap'>
						<h3 className='cold'>Purple</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Yellow} alt='yellow'/>
					<div className='image-overlap'>
						<h3 className='warm'>Yellow</h3>
					</div>
				</div>
				<div className='color'>
					<img src={Gold} alt='gold'/>
					<div className='image-overlap'>
						<h3 className='warm'>Gold</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Customization