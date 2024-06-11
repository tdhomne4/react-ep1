import React , {useState,useEffect} from 'react'
import './Card.scss';
import { CDN_URL } from '../../../../utils/constants';
import Loader from "../../../Laoder/Loader"
import Shimmer from '../../../Shimmer/Shimmer';
const Card = () => {
	const [listOfRes, setListOfRes] = useState([]);
	const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants");
	useEffect(() => {
		console.log("useeffect called");
		fetchResData();
		console.log(filterBtnName);
	},[]);

	const fetchResData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const jsonData = await data.json();
		//optional chaining
		console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setListOfRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	}
	//conditional rendering
	return listOfRes.length === 0 ? <Shimmer /> : (
		<>
		<div className='top-rated-sec'>
				{filterBtnName === "Top Rated Restaurants" ? 
					<button className='top-rated-btn' onClick={() => {
						const filterResData = listOfRes.filter((res) => 
							res.info.avgRating > 4
						)
						setListOfRes(filterResData);
						setFilterBtnName("Reset Restaurants");
					}}>{filterBtnName}</button>
					 : 
					<button className='reset-res-btn' onClick={() => {
						fetchResData();
						setFilterBtnName("Top Rated Restaurants");
					}}>
						{filterBtnName}
				</button>}
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