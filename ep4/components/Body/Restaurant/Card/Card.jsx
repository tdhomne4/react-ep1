import React from 'react'
import './Card.scss';
import resData from '../../../../resData.json';
const Card = () => {

	return (
		<div className='card-container'>
			{resData.map(({info:restaurant},index) => (
				<div className="food-card" key={restaurant.id}>
					{index !== 1 && restaurant.cloudinaryImageId && <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.cloudinaryImageId} alt={restaurant.name} className="food-card-image" />}
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
						 {index === 1 && restaurant.cloudinaryImageId && <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.cloudinaryImageId} alt={restaurant.name} className="food-card-image" />}
				 </div>
			))}
			
		</div>
	)
}
export default Card;