import React, { useState } from "react";
import { FiCircle } from "react-icons/fi";
import "./ResDetails.scss";
import {CDN_URL} from "../../../utils/constants"
const ResMenu = ({ resDetailsData }) => {
  const [isOpen, setIsOpen] = useState(true);
  resDetailsData = resDetailsData.slice(1);
	console.log(resDetailsData);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="res_menus_container">
        <hr className="outlet_time_break"></hr>
				{resDetailsData?.length > 0 ? 
					resDetailsData?.map((res,index) => (
						<div className="res_menus_accordion" key={index + 1}>
						<button className="accordion_header" onClick={toggleAccordion}>
							<h3 className="menu_name">{res?.card?.card?.title}Recommended (15)</h3>
							<span>{isOpen ? "-" : "+"}</span>
						</button>
						{isOpen ? (
							res?.card?.card?.itemCards?.length > 0 ? 
								res.card.card.itemCards.map((menu,index) => (
									<div className="accordion_content">
								<div className="menu_content">
									<div className="menu_details">
										<div className="veg_nonveg_sec">
											<FiCircle />
										</div>
										<div className="menu_name">
											<h5>{menu.card.info.name}</h5>
										</div>
										<div className="menu_price">
											<span>Rs. {menu.card.info.price/100}</span>
										</div>
										<div className="rating_details">
											<span className="star">*</span>
											<span className="ratings">{menu.card.info.ratings.aggregatedRating.rating}</span>
											<span className="rating_count">({menu.card.info.ratings.aggregatedRating.ratingCountV2})</span>
										</div>
										<div className="menu_des">
											<p>
											{menu.card.info.description}
											</p>
										</div>
									</div>
									<div className="menu_img_sec">
										<img
											src={CDN_URL + menu.card.info.imageId}
											alt=""
										/>
									</div>
								</div>
							</div>
								))
								: ""
							
						) : ""}
					</div>
					))
					
					: ""}
       
      </div>
    </>
  );
};
export default ResMenu;
