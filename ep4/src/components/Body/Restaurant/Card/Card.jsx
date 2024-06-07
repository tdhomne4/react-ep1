import React , {useState} from 'react'
import './Card.scss';
import resData from '../../../../utils/resData';
import { CDN_URL } from '../../../../utils/constants';
const Card = () => {
	const [listOfRes, setListOfRes] = useState(resData);
	return (
		<>
		<div className='top-rated-sec'>
			<button className='top-rated-btn' onClick={() => {
				const filterResData = listOfRes.filter((res) => 
					res.info.avgRating > 4
				)
				setListOfRes(filterResData);
				console.log(filterResData);
			}}>Top Rated Restaurants</button>
		</div>
		<div className='card-container'>
			{listOfRes?.map(({info:restaurant},index) => (
				<div className="food-card" key={restaurant.id}>
					{restaurant.cloudinaryImageId ? <img src={CDN_URL+restaurant.cloudinaryImageId} alt={restaurant.name} className="food-card-image" /> : ""}
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
				 </div>
			))}
		</div>
		</>
	)
}
export default Card;