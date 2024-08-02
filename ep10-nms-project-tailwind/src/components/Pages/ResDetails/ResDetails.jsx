import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { PiMotorcycleFill } from "react-icons/pi";
import { RES_DETAILS_API,removeHTMLTags } from '../../../utils/constants';
import "./ResDetails.scss";
import Shimmer from '../../Loading/Shimmer';
import ResMenu from './ResMenu';
const ResDetails = () => {
	const {resId} = useParams();
	const [resDetails, setResDetails] = useState([]);
	const [resMenus, setMenus] = useState([]);

	useEffect(() => {
		fetchRedDetails();
	},[resId]);

	const fetchRedDetails = async () => {
		const data = await fetch(RES_DETAILS_API+resId);
		const jsonData = await data.json(); 
		setResDetails(jsonData?.data?.cards[2]?.card?.card?.info);
		setMenus(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
	} 
	const {name,avgRatingString,totalRatingsString,costForTwoMessage,areaName,sla,feeDetails} = resDetails;
	return (
		<>
		{Object.keys(resDetails).length === 0 ? <Shimmer condition="Res details" /> : 
		<div className='res_details'>
			<div className="res_details_name">
				<h1>{name}</h1>
			</div>
			<div className="res_details_info">
				<div className="res_details_info_container">
					<div className="res_rating_cost_sec">
						<div className="res_rating_star">*</div>
						<div className="res_rating_sec">{avgRatingString} ({totalRatingsString})</div>
						<div className='res_divider'>|</div>
						<div className="cost_for_two">{costForTwoMessage}</div>
					</div>
				<div className="outlet_time">
					<div className="res_outlet">
						<div className="outlet_start"></div>
						<div className="outlet_middle"></div>
						<div className="outlet_end"></div>
					</div>
					<div className="res_time">
						<div className="outlet_info">
							<div className="outlet_heading">Outlet</div>
							<div className="outlet_content">{areaName}</div>
						</div>
						<div className="delivery_time">
							<span>{sla?.slaString}</span>
						</div>
					</div>
				</div>
				<hr className='outlet_time_break'></hr>
				<div className="res_dis_delivery_fee_sec">
					<span className='delivery_fee'><PiMotorcycleFill /> {feeDetails?.message ? removeHTMLTags(feeDetails.message) : ""}</span>
				</div>
			</div>
			</div>
			<ResMenu resDetailsData={resMenus} />
		</div>
	}
	</>
	)
}
export default ResDetails;