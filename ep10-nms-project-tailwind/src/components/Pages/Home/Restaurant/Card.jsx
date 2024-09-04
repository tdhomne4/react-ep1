import React from 'react'
import { Link } from "react-router-dom";
import { CDN_URL } from "../../../../utils/constants";
const Card = ({restaurantData}) => {
	return (
		<>
		<Link to={`restaurants/${restaurantData.id}`} key={restaurantData.id}>
		<div className="card_container_card">
		{restaurantData.cloudinaryImageId ? (
			<img
				src={CDN_URL + restaurantData.cloudinaryImageId}
				alt={restaurantData.name}
				className="card_container_card_img"
			/>
		) : (
			""
		)}
		<div className="card_container_card_info">
			<p className="res-name">{restaurantData.name}</p>
			<p className="card-cuisines">
				— {restaurantData.cuisines.join(", ")}
			</p>
			<p className="card-cost">— {restaurantData.costForTwo}</p>
			<div className="rating_sec">
				<span className="rating_sec_ratings">{restaurantData.avgRating}</span>
				<span className="rating_sec_time">{restaurantData.sla.slaString}</span>
			</div>
			<div className="card_container_card_address">
				<span>{restaurantData.areaName}</span>
			</div>
		</div>
	</div>
	</Link>
	</>
	)
}

export default Card;
