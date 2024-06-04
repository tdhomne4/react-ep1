import React from 'react'
import './Card.scss';
import resData from '../../../../utils/mocData';
import { CDN_URL } from '../../../../utils/constants';
const Card = () => {

	return (
		<>
		<div className='top-rated-sec'>
			<button className='top-rated-btn'>Top Rated Restaurants</button>
		</div>
		<div className='card-container'>
			{resData.map(({info:restaurant},index) => (
				<div className="food-card" key={restaurant.id}>
					{index !== 1 && restaurant.cloudinaryImageId && <img src={CDN_URL+restaurant.cloudinaryImageId} alt={restaurant.name} className="food-card-image" />}
						 <div className="food-card-info">
							 <p>{restaurant.name}</p>
							 <p className='card-cuisines'>— {restaurant.cuisines.join(", ")}</p>
							 <p className='card-cost'>— {restaurant.costForTwo}</p>
							 <div className='rating-sec'>
								<span className='card-ratings'>{restaurant.avgRating}</span>
								<span className='card-time'>{restaurant.sla.slaString}</span>
							 </div>
							 <div className='res-address'>
								<span>{restaurant.areaName}</span>
							 </div>
						 </div>
						 {index === 1 && restaurant.cloudinaryImageId && <img src={CDN_URL+restaurant.cloudinaryImageId} alt={restaurant.name} className="food-card-image" />}
				 </div>
			))}
		</div>
		</>
	)
}
export default Card;